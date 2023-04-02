import { format, createLogger, transports } from 'winston';
import 'winston-daily-rotate-file';

const { combine, timestamp, errors, json } = format;

const fileRotateTransport = new transports.DailyRotateFile({
  filename: 'logs/rotate-%DATE%.log',
  datePattern: 'DD-MM-YYYY',
  maxFiles: '14d',
});

function buildProdLogger(serviceName: string) {
  const logger = createLogger({
    format: combine(timestamp(), errors({ stack: true }), json()),
    defaultMeta: { service: serviceName },
    transports: [fileRotateTransport],
  });

  return logger;
}

export { buildProdLogger };
