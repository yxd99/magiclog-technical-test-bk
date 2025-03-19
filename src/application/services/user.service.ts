import { Injectable } from '@nestjs/common';

import { SignUpUserDto } from '@application/dtos/user/signup-user.dto';
import { User } from '@domain/entities/user.entity';
import { UserRepository } from '@domain/repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findByEmail(email);
  }

  async create(dto: SignUpUserDto): Promise<User> {
    const user = await User.create(dto);
    return this.userRepository.create(user);
  }
}
