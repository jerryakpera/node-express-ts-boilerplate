import CustomError from '@src/errors/CustomError';
import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    return res.send({
      errors: err.serializeErrors(),
    });
  }

  res.send({
    errors: [{ message: 'Some error occured' }],
  });
};

export default errorHandler;
