import BaseError from './BaseError';

class MulterErrorHandler extends BaseError {
  constructor(message = "Error while uploading image") {
    super(message, 400);
  };
};

export default MulterErrorHandler;
