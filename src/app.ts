import cors from 'cors';
import helmet from 'helmet';
import express, { Application, Request, Response } from 'express';

import config from '@src/config';
import routes from '@src/routes';
import notFoundHandler from '@src/middleware/not-found';
import errorHandler from '@src/middleware/error-handler';

const { baseURL } = config;

const createServer = (): Application => {
  const app = express();

  app.use(cors());
  app.use(helmet());

  app.use(express.json());

  app.disable('x-powered-by');

  app.get('/health', (req: Request, res: Response) => {
    return res.send('UP');
  });

  app.use(`${baseURL}`, routes);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};

export { createServer };
