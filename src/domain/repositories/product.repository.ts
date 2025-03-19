import { Product } from '@domain/entities/product.entity';

export abstract class ProductRepository {
  abstract findAll(): Promise<Product[]>;

  abstract findOne(id: string): Promise<Product>;

  abstract create(product: Product): Promise<Product>;

  abstract update(product: Product): Promise<Product>;

  abstract delete(id: string): Promise<Product>;
}
