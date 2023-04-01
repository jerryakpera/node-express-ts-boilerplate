import { Request, Response, NextFunction } from 'express';

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  return next({
    code: 404,
    message: 'Resource not found',
  });
};

export default notFoundHandler;
