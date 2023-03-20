import { FastifyReply, FastifyRequest } from 'fastify';
import { PrismaClient } from '@prisma/client';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

import { STANDARD, ERROR_401 } from '../helpers/constants';

const prisma = new PrismaClient();

interface GitHubResponse {
  id: number;
  avatar_url: string;
  login: string;
  name: string;
}

class GithubController {
  async login(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { code } = request.query as { code: string };

      const params = `?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET_KEY}&code=${code}`;

      const { data } = await axios.post(
        `https://github.com/login/oauth/access_token${params}`,
        {},
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );

      console.log('data', data);

      const accessToken = data.access_token;

      const { data: githubData } = await axios.get<GitHubResponse>(
        'https://api.github.com/user',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log('githubData', githubData);

      let user = await prisma.user.findFirst({
        where: {
          github_id: {
            equals: String(githubData.id),
          },
        },
      });

      if (user === null) {
        user = await prisma.user.create({
          data: {
            completedChallenges: 0,
            currentXp: 0,
            isDarkMode: true,
            level: 1,
            totalXp: 0,
            username: githubData.login,
            avatar_url: githubData.avatar_url,
            name: githubData.name,
            id: uuid(),
            github_id: String(githubData.id),
          },
        });
      }

      await prisma.$disconnect();

      return reply.code(STANDARD.SUCCEED).send({ ...user, accessToken });
    } catch (error) {
      return reply.send({ error });
    }
  }

  async auth(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { accessToken } = request.body as { accessToken: string };

      const { data: githubData } = await axios.get<GitHubResponse>(
        'https://api.github.com/user',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const user = await prisma.user.findFirst({
        where: {
          username: {
            equals: githubData.login,
          },
        },
      });

      if (user) {
        return reply.status(STANDARD.SUCCEED).send({ ...user });
      }

      await prisma.$disconnect();

      return reply.status(ERROR_401.statusCode).send({});
    } catch (error) {
      return reply.send({ error });
    }
  }
}

export default new GithubController();
