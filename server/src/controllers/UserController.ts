import { PrismaClient, User } from '@prisma/client';
import { FastifyReply, FastifyRequest } from 'fastify';

import { STANDARD } from '../helpers/constants';

const prisma = new PrismaClient();

class UserController {
  async update(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { user } = request.body as { user: User };

      await prisma.user.update({
        where: { id: user.id },
        data: {
          completedChallenges: user.completedChallenges,
          currentXp: user.currentXp,
          totalXp: user.totalXp,
          isDarkMode: user.isDarkMode,
          level: user.level,
        },
      });

      return reply.status(STANDARD.SUCCEED).send({
        user,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getUserById(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = request.params as { id: string };

      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      return reply.status(STANDARD.SUCCEED).send({ user });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserController();
