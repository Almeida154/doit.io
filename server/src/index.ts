import fastify from 'fastify';
import routes from './routes';

const server = fastify();
const port = 3000;

server.register(routes);

server.listen({ port }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`👋 Server listening at http://localhost:${port}`);
});
