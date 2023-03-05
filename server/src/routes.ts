import { FastifyInstance } from 'fastify';

import { GithubController, UserController } from './controllers';

const routes = async (fastify: FastifyInstance) => {
  fastify.get('/login', GithubController.login);
  fastify.post('/auth', GithubController.auth);
  fastify.get('/user/:id', UserController.getUserById);
  fastify.put('/user/update', UserController.update);
};

export default routes;
