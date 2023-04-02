import dotenv from 'dotenv-safe';

dotenv.config();

const { env } = process;

const config = {
  port: env.PORT,
  baseURL: env.BASE_URL,
  serviceName: env.SERVICE_NAME,
};

export default config;
