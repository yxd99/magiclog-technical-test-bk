import { Role } from '@application/enums/roles';
import * as encrypt from '@infrastructure/utils/encrypt';

export class User {
  constructor(
    public readonly id: string | null,
    public name: string,
    public email: string,
    public password?: string,
    public roles?: Role,
  ) {}

  static async create(data: Partial<User>): Promise<User> {
    const password = await encrypt.encrypt(data.password);
    return new User(
      data.id ?? null,
      data.name,
      data.email,
      password,
      data.roles,
    );
  }

  async validatePassword(password: string): Promise<boolean> {
    return encrypt.compare(password, this.password);
  }
}
