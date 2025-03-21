import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductFiltersDto } from '@application/dtos/product/product-filters.dto';
import { User } from '@domain/entities/user.entity';
import { ProductRepository } from '@domain/repositories/product.repository';
import { UserRepository } from '@domain/repositories/user.repository';
import { UserEntity } from '@infrastructure/db/entities/user.entity';
import { UserMapper } from '@infrastructure/mappers/user.mapper';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly productRepository: ProductRepository,
  ) {}

  async findByEmail(email: string) {
    const entity = await this.userRepository.findOneBy({ email });
    return entity ? UserMapper.toDomain(entity) : null;
  }

  async findById(id: string) {
    const entity = await this.userRepository.findOneBy({ id });
    return entity ? UserMapper.toDomain(entity) : null;
  }

  async create(user: User) {
    const entity = UserMapper.toPersistence(user);
    const created = await this.userRepository.save(entity);
    return UserMapper.toDomain(created);
  }

  async update(user: User) {
    await this.userRepository.update(user.id, UserMapper.toPersistence(user));
    return user;
  }

  async getUserWithPassword(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      select: ['id', 'name', 'email', 'password', 'roles'],
    });
    return user ? UserMapper.toDomain(user) : null;
  }

  async getMyProducts(userId: string, filters: ProductFiltersDto) {
    const products = await this.productRepository.findByUserId(userId, filters);
    return products;
  }
}
