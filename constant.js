export const HttpStatusCode = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER: 500,
};

export const AppConfig = {
  hostname: '0.0.0.0',
  port: 3000,
  fileUploadDir: './uploads/',
  emailFileUploadDir: './public/uploads/',
  logFile: {
    folder: 'logs',
    errorFile: 'error-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: false,
    handleExceptions: true,
    maxSize: '10m',
    maxFiles: '2d'
  },
  JWT: {
    secret: 'TWOR!#$IERFLD'
  }
};
