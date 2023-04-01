import { createServer } from '@src/app';
import config from '@src/config';

const { port } = config;

const startServer = async () => {
  const app = await createServer();
  app.listen(port, () => {
    console.log(`Server live on port: ${port}`);
  });
};

startServer();
