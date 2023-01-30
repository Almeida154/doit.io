import { FastifyInstance } from 'fastify';

import { GithubController, UserController } from './controllers';

const routes = async (fastify: FastifyInstance) => {
  fastify.get('/login', GithubController.login);
};

export default routes;
