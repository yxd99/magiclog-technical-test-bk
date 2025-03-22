import 'dotenv/config';
import { z } from 'zod';

export enum Environments {
  development = 'development',
  production = 'production',
  test = 'test',
}

export const envSchema = z.object({
  PORT: z.string().default('3000'),
  NODE_ENV: z.nativeEnum(Environments),
  DB_HOST: z.string().default('localhost'),
  DB_PORT: z.coerce.number(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string(),
  DB_SCHEMA: z.string(),
  DECORATOR_PUBLIC_KEY: z.string(),
  DECORATOR_ROLES_KEY: z.string(),
  JWT_SECRET: z.string(),
  JWT_EXPIRES_IN: z.string(),
});

const { data, error } = envSchema.safeParse(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const envs = data;
