import { ProductAdminFiltersDto } from '@application/dtos/product/product-admin-filters.dto';
import { ProductFiltersDto } from '@application/dtos/product/product-filters.dto';
import { Product } from '@domain/entities/product.entity';

export abstract class ProductRepository {
  abstract findAll(filters: ProductFiltersDto): Promise<Product[]>;

  abstract findOne(id: string): Promise<Product>;

  abstract create(product: Product): Promise<Product>;

  abstract update(product: Product): Promise<Product>;

  abstract delete(id: string): Promise<Product>;

  abstract findByUserId(
    userId: string,
    filters: ProductFiltersDto,
  ): Promise<Product[]>;

  abstract findAllAdmin(filters: ProductAdminFiltersDto): Promise<Product[]>;
}
