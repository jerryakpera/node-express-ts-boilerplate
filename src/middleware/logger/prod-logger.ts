import { format, createLogger, transports } from 'winston';
const { combine, timestamp, errors, json } = format;

function buildProdLogger(serviceName: string) {
  const logger = createLogger({
    format: combine(timestamp(), errors({ stack: true }), json()),
    defaultMeta: { service: serviceName },
    transports: [new transports.Console()],
  });

  return logger;
}

export { buildProdLogger };
