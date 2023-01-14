import { FastifyReply, FastifyRequest } from 'fastify';

class UserController {
  async create(req: FastifyRequest, res: FastifyReply) {
    return 'Hello from UserController';
  }
}

export default new UserController();
