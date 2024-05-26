import { NextFunction, Request, Response } from 'express';
import NotFound from '../errors/NotFound';

function NotFoundHandler(_req: Request, _res: Response, next: NextFunction) {
  const NotFoundError = new NotFound();
  next(NotFoundError);
};

export default NotFoundHandler;
