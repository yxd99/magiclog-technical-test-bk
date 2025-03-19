import * as bcrypt from 'bcrypt';

import { envs } from '@infrastructure/config/envs';

export async function encrypt(text) {
  return bcrypt.hash(text, envs.BCRYPT_SALT_ROUNDS);
}

export async function compare(text, hash) {
  return bcrypt.compare(text, hash);
}
