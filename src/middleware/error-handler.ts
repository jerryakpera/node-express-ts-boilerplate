import { Request, Response, NextFunction } from 'express';
import { CustomError } from '@src/models/custom-error.model';

const errorHandler = (err: TypeError | CustomError, req: Request, res: Response, next: NextFunction) => {
  let customError = err;

  if (!(err instanceof CustomError)) {
    customError = new CustomError('Well, this is embarrasing!');
  }

  res.status((customError as CustomError).code).send(customError);
};

export default errorHandler;
