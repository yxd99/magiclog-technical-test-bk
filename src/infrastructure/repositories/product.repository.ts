import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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

  async findAll() {
    const entity = await this.productRepository.find({
      relations: ['user'],
    });
    return entity.map(ProductMapper.toDomain);
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
}
