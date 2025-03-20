import { Role } from '@application/enums/roles';
import * as bcrypt from '@infrastructure/utils/bcrypt';

export class User {
  constructor(
    public readonly id: string | null,
    public name: string,
    public email: string,
    public password?: string,
    public roles?: Role,
  ) {}

  static async create(data: Partial<User>): Promise<User> {
    const password = await bcrypt.encrypt(data.password);
    return new User(
      data.id ?? null,
      data.name,
      data.email,
      password,
      data.roles,
    );
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
