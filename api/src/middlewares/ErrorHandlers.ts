import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import BaseError from '../errors/BaseError';
import IncorrectRequest from '../errors/IncorrectRequest';
import ValidationError from '../errors/ValidationError';
import MulterErrorHandler from '../errors/MulterErrorHandler';

function ErrorHandlers(
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if ( error instanceof mongoose.Error.CastError) {
    new IncorrectRequest().sendResponse(res);

  } else if (error instanceof multer.MulterError) {
      new MulterErrorHandler().sendResponse(res);

  } else if (error instanceof mongoose.Error.ValidationError) {
    new ValidationError(error).sendResponse(res);

  } else if (error instanceof BaseError) {
    error.sendResponse(res);

  } else {
    new BaseError().sendResponse(res);
  };
};

export default ErrorHandlers;
