import dotenv from 'dotenv-safe';

dotenv.config();

const { env } = process;

const config = {
  port: env.PORT,
  baseURL: env.baseURL,
};

export default config;
