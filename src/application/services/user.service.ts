import { Injectable } from '@nestjs/common';

import { ProductFiltersDto } from '@application/dtos/product/product-filters.dto';
import { SignUpUserDto } from '@application/dtos/user/signup-user.dto';
import { User } from '@domain/entities/user.entity';
import { UserRepository } from '@domain/repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }

  async create(dto: SignUpUserDto) {
    const user = await User.create(dto);
    return this.userRepository.create(user);
  }

  async getMyProducts(userId: string, filters: ProductFiltersDto) {
    return this.userRepository.getMyProducts(userId, filters);
  }
}
