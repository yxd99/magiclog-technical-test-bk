import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  FindOptionsWhere,
  ILike,
  LessThanOrEqual,
  MoreThanOrEqual,
  Repository,
} from 'typeorm';

import { ProductFiltersDto } from '@application/dtos/product/product-filters.dto';
import { Product } from '@domain/entities/product.entity';
import { ProductRepository } from '@domain/repositories/product.repository';
import { ProductEntity } from '@infrastructure/db/entities/product.entity';
import { ProductMapper } from '@infrastructure/mappers/product.mapper';

@Injectable()
export class ProductRepositoryImpl implements ProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async findAll(filters: ProductFiltersDto) {
    const { page = 1, limit = 15, ...restFilters } = filters;
    const where: FindOptionsWhere<ProductEntity> = {};

    if (restFilters.name) {
      where.name = ILike(`%${restFilters.name}%`);
    }

    if (restFilters.sku) {
      where.sku = ILike(`%${restFilters.sku}%`);
    }

    if (restFilters.minPrice !== undefined) {
      where.price = MoreThanOrEqual(restFilters.minPrice);
    }

    if (restFilters.maxPrice !== undefined) {
      where.price = LessThanOrEqual(restFilters.maxPrice);
    }

    if (restFilters.userEmail) {
      where.user = { email: ILike(`%${restFilters.userEmail}%`) };
    }

    const entities = await this.productRepository.find({
      where,
      relations: ['user'],
      skip: (page - 1) * limit,
      take: limit,
      order: {
        createdAt: 'DESC',
      },
    });

    return entities.map(ProductMapper.toDomain);
  }

  async findOne(id: string) {
    const entity = await this.productRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    return entity ? ProductMapper.toDomain(entity) : null;
  }

  async create(product: Product) {
    const entity = ProductMapper.toPersistence(product);
    const data = await this.productRepository.save(entity);
    return ProductMapper.toDomain(data);
  }

  async update(product: Product) {
    await this.productRepository.update(
      product.id,
      ProductMapper.toPersistence(product),
    );
    return product;
  }

  async delete(id: string) {
    const entity = await this.findOne(id);
    if (!entity) {
      return null;
    }
    await this.productRepository.softDelete({ id });
    return entity;
  }

  async findByUserId(userId: string, filters: ProductFiltersDto) {
    const { page = 1, limit = 15, ...restFilters } = filters;
    const where: FindOptionsWhere<ProductEntity> = {};

    if (restFilters.name) {
      where.name = ILike(`%${restFilters.name}%`);
    }

    if (restFilters.sku) {
      where.sku = ILike(`%${restFilters.sku}%`);
    }

    if (restFilters.minPrice !== undefined) {
      where.price = MoreThanOrEqual(restFilters.minPrice);
    }

    if (restFilters.maxPrice !== undefined) {
      where.price = LessThanOrEqual(restFilters.maxPrice);
    }

    const entities = await this.productRepository.find({
      where: {
        ...where,
        user: { id: userId },
      },
      relations: ['user'],
      skip: (page - 1) * limit,
      take: limit,
      order: {
        createdAt: 'DESC',
      },
    });

    return entities.map(ProductMapper.toDomain);
  }
}
