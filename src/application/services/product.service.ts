import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

import { CreateProductDto } from '@application/dtos/product/create-product.dto';
import { ProductAdminFiltersDto } from '@application/dtos/product/product-admin-filters.dto';
import { ProductFiltersDto } from '@application/dtos/product/product-filters.dto';
import { UpdateProductDto } from '@application/dtos/product/update-product.dto';
import { Product } from '@domain/entities/product.entity';
import { ProductRepository } from '@domain/repositories/product.repository';
import { UserRepository } from '@domain/repositories/user.repository';
import { UNIQUE_VIOLATION } from '@infrastructure/utils/constants/postgres-error';

@Injectable()
export class ProductService {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async findAll(filters: ProductFiltersDto) {
    return this.productRepository.findAll(filters);
  }

  async findOne(id: string) {
    const product = await this.productRepository.findOne(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async create(dto: CreateProductDto, userId: string) {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    try {
      const entity = Product.create({
        ...dto,
        user,
      });
      return await this.productRepository.create(entity);
    } catch (error) {
      if (error.code === UNIQUE_VIOLATION) {
        throw new ConflictException('SKU is already registered for this user');
      }
      throw error;
    }
  }

  async update(productId: string, dto: UpdateProductDto, userId: string) {
    const product = await this.findOne(productId);
    await this.throwIfIsNotOwner(productId, userId);
    const entity = Product.create({
      ...product,
      ...dto,
    });

    return this.productRepository.update(entity);
  }

  async delete(id: string, userId: string) {
    await this.throwIfIsNotOwner(id, userId);
    return this.productRepository.delete(id);
  }

  async throwIfIsNotOwner(id: string, userId: string) {
    const product = await this.findOne(id);
    const isOwner = await product.validateOwner(userId);
    if (!isOwner) {
      throw new UnauthorizedException('You arent the owner of this product');
    }
  }

  async findAllAdmin(filters: ProductAdminFiltersDto) {
    return this.productRepository.findAllAdmin(filters);
  }
}
