import { format, createLogger, transports, Logger } from 'winston';
const { printf, combine, timestamp, colorize, errors } = format;

function buildDevLogger(serviceName: string): Logger {
  const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`;
  });

  const logger = createLogger({
    format: combine(colorize(), timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), errors({ stack: true }), logFormat),
    // defaultMeta: { service: serviceName },
    transports: [new transports.Console()],
  });

  return logger;
}

export { buildDevLogger };
