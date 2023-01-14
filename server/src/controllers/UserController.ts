import { FastifyReply, FastifyRequest } from 'fastify';

class UserController {
  async create(request: FastifyRequest, reply: FastifyReply) {
    return 'Hello from UserController';
  }
}

export default new UserController();
