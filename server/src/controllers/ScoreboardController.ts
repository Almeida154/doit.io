import { FastifyReply, FastifyRequest } from 'fastify';
import { PrismaClient } from '@prisma/client';

import { STANDARD } from '../helpers/constants';

const prisma = new PrismaClient();

class ScoreboardController {
  async getScoreboard(request: FastifyRequest, reply: FastifyReply) {
    try {
      const users = await prisma.user.findMany({
        orderBy: {
          totalXp: 'asc',
        },
      });

      await prisma.$disconnect();

      return reply.code(STANDARD.SUCCEED).send({
        users,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ScoreboardController();
