import { appLog } from './LoggerUtils';
import { HttpStatusCode } from '../../constant';

export class BaseError extends Error {
  constructor(name, httpCode, description, isOperational) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;
    this.description = description;
    Error.captureStackTrace(this);
  }
}

export class FieldError {
  constructor(name, code, message) {
    this.name = name;
    this.code = code;
    this.message = message;
  }
}

export class APIError extends BaseError {
  constructor(name, httpCode = 500, description = 'internal server error') {
    super(name, httpCode, true, description);
  }
}

export class BadRequestError extends BaseError {
  constructor(name, description, details) {
    super(name, HttpStatusCode.BAD_REQUEST, description, true);
    this.details = details;
  }
}

class ErrorHandler {
  handleError(err) {
    appLog.error(err);
    // await sendMailToAdminIfCritical();
    // await sendEventsToSentry();
  }

  isTrustedError(error) {
    if (error instanceof BaseError) {
      return error.isOperational;
    }
    return false;
  }
}

export const errorHandler = new ErrorHandler();
