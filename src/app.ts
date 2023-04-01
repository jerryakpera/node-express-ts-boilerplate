import cors from 'cors';
import helmet from 'helmet';
import 'express-async-errors';
import express, { Application, Request, Response } from 'express';

import config from '@src/config';
import routes from '@src/routes';
import { logger } from '@src/middleware/logger';
import notFoundHandler from '@src/middleware/not-found';
import errorHandler from '@src/middleware/error-handler';
import ValidationError from './errors/ValidationError';

const { baseURL } = config;

const createServer = (): Application => {
  const app = express();

  app.use(cors());
  app.use(helmet());

  app.use(express.json());

  app.disable('x-powered-by');

  app.get('/health', async (req: Request, res: Response) => {
    logger.info('text info');
    logger.warn('text warn');
    logger.error('text error');

    throw new ValidationError('Some error!', 'age');
    return res.send('UP');
  });

  app.use(`${baseURL}`, routes);

  app.use(notFoundHandler);

  // Middleware to log the error or send it to a 3rd party error monitoring software
  // app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  //   logger.logError(err);

  //   next(err);
  // });

  app.use(errorHandler);

  return app;
};

export { createServer };
