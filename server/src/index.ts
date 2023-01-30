import { config } from 'dotenv';
config();

import fastify from 'fastify';
import cors from '@fastify/cors';

import routes from './routes';

const server = fastify();
const port = 3333;

server.register(cors);
server.register(routes);

server.listen({ port }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`👋 Server listening at http://localhost:${port}`);
});
