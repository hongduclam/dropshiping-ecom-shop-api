import winston from 'winston';
import { AppConfig } from '../../constant';

require('winston-daily-rotate-file');

const { format } = winston;
const {
  combine, label, json, timestamp
} = format;

export const container = new winston.Container();

function createFormat(_label) {
  return combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSS'
    }),
    label({ label: _label }),
    json()
  );
}

function createLoggerOptions(loggerName) {
  const rs = {
    format: createFormat(loggerName),
    transports: [
      new (winston.transports.DailyRotateFile)({
        filename: `${AppConfig.logFile.folder}`.concat(`/${loggerName}-%DATE%.log`),
        datePattern: AppConfig.logFile.datePattern,
        zippedArchive: AppConfig.logFile.zippedArchive,
        handleExceptions: AppConfig.logFile.handleExceptions,
        maxSize: AppConfig.logFile.maxSize,
        maxFiles: AppConfig.logFile.maxFiles,
        level: 'info'
      })
    ]
  };

  if (process.env.NODE_ENV !== 'production') {
    rs.transports.push(new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
      format: winston.format.simple()
    }));
  }

  return rs;
}

container.add('database', createLoggerOptions('database'));

container.add('http', createLoggerOptions('http'));

container.add('app', {
  ...createLoggerOptions('app'),
  exceptionHandlers: [
    new (winston.transports.DailyRotateFile)({
      filename: `${AppConfig.logFile.folder}`.concat('/exception-%DATE%.log'),
      datePattern: AppConfig.logFile.datePattern,
      zippedArchive: AppConfig.logFile.zippedArchive,
      handleExceptions: AppConfig.logFile.handleExceptions,
      maxSize: AppConfig.logFile.maxSize,
      maxFiles: AppConfig.logFile.maxFiles,
      level: 'info'
    })
  ]
});

container.add('scheduler', createLoggerOptions('scheduler'));

container.add('email', createLoggerOptions('email'));

container.add('event', createLoggerOptions('event'));

export const httpLog = container.get('http');
export const appLog = container.get('app');
export const schedulerLog = container.get('scheduler');
export const emailLog = container.get('email');
export const eventLog = container.get('event');
export const dbLog = container.get('database');

export const httpStream = {
  write: (message) => {
    httpLog.info(message);
  }
};
