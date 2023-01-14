import { FastifyInstance } from 'fastify';

import { UserController } from './controllers';

const routes = async (fastify: FastifyInstance) => {
  fastify.get('/', UserController.create);
};

export default routes;
