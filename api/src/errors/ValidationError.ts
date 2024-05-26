import mongoose from 'mongoose';
import BaseError from './BaseError';

class ValidationError extends BaseError {
  constructor(error: mongoose.Error.ValidationError) {
    const errorMessage = Object
      .values(error.errors)
      .map((error: any) => error.message)
      .join('; ');

      super(`There was a data validation error: ${errorMessage}`);
    };
};

export default ValidationError;
