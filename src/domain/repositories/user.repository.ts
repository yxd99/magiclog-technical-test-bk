import { ProductFiltersDto } from '@application/dtos/product/product-filters.dto';
import { Product } from '@domain/entities/product.entity';
import { User } from '@domain/entities/user.entity';

export abstract class UserRepository {
  abstract findByEmail(email: string): Promise<User | null>;

  abstract findById(id: string): Promise<User | null>;

  abstract create(user: User): Promise<User>;

  abstract update(user: User): Promise<User>;

  abstract getUserWithPassword(email: string): Promise<User>;

  abstract getMyProducts(
    userId: string,
    filters: ProductFiltersDto,
  ): Promise<Product[]>;
}
