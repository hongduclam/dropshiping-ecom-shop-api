import {errorHandler} from "./utils/ErrorUtils";
import {initRouters} from "./routes";

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

initRouters(app)

app.use((err, req, res, next) => {
  console.error(`message - ${err.message}, stack trace - ${err.stack}`);
  next(err);
});

app.use((error, req, res, next) => {
  if (!errorHandler.isTrustedError(error)) {
    const customError = {error: error.message}
    res.status(500)
      .json(customError);
    errorHandler.handleError(customError);
  } else {
    errorHandler.handleError(error);
    res.status(error.httpCode)
      .json({
        name: error.name,
        description: error.description,
        details: error.details,
      });
  }
});

module.exports = app;
