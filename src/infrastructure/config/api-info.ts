import { envs } from './envs';

export const TITLE = 'MagicLog API';
export const DESCRIPTION = `MagicLog API is a backend service for the MagicLog Technical Test`;
export const VERSION = 'v1';
export const PREFIX = 'api';
export const { PORT } = envs;
export const SERVERS = [
  {
    host: envs.PROJECT_URL,
    description: envs.NODE_ENV,
  },
];
