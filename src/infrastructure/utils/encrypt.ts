import * as argon2 from 'argon2';

export function encrypt(text: string): Promise<string> {
  return argon2.hash(text);
}

export function compare(text: string, hash: string): Promise<boolean> {
  return argon2.verify(hash, text);
}
