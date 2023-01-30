import { FastifyReply, FastifyRequest } from 'fastify';
import { PrismaClient } from '@prisma/client';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

import { STANDARD } from '../helpers/constants';

const prisma = new PrismaClient();

interface GitHubResponse {
  avatar_url: string;
  bio: string;
  company: string;
  login: string;
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

      const accessToken = data.access_token;

      const { data: userData } = await axios.get<GitHubResponse>(
        'https://api.github.com/user',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const userExists = await prisma.user.findFirst({
        where: {
          username: {
            equals: userData.login,
          },
        },
      });

      if (userExists === null) {
        const user = await prisma.user.create({
          data: {
            completedChallenges: 0,
            currentXp: 0,
            isDarkMode: false,
            level: 1,
            totalXp: 0,
            username: userData.login,
            id: uuid(),
          },
        });
      }

      await prisma.$disconnect();

      return reply.code(STANDARD.SUCCEED).send({ accessToken, userData });
    } catch (error) {
      return reply.send({ error });
    }
  }
}

export default new GithubController();
