import * as bcrypt from 'bcrypt';

import { envs } from '@infrastructure/config/envs';

export async function encrypt(text): Promise<string> {
  return bcrypt.hash(text, envs.BCRYPT_SALT_ROUNDS);
}

export async function compare(text, hash): Promise<boolean> {
  return bcrypt.compare(text, hash);
}
