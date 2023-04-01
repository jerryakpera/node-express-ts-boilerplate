import winston from 'winston';

const logger = winston.createLogger({
  format: winston.format.simple(),
  // defaultMeta: { service: 'api-boilerplate' },
  transports: [new winston.transports.Console()],
});

export { logger };
