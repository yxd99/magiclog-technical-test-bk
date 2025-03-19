import { Product } from '@domain/entities/product.entity';
import { User } from '@domain/entities/user.entity';
import { ProductEntity } from '@infrastructure/db/entities/product.entity';
import { UserEntity } from '@infrastructure/db/entities/user.entity';

export class ProductMapper {
  static toDomain(data: ProductEntity): Product {
    return new Product(
      data.id,
      data.name,
      data.sku,
      data.stock,
      data.price,
      data.user
        ? new User(data.user.id, data.user.name, data.user.email)
        : null,
    );
  }

  static toPersistence(product: Product): ProductEntity {
    const entity = new ProductEntity();
    entity.id = product.id ?? undefined;
    entity.name = product.name;
    entity.sku = product.sku;
    entity.stock = product.stock;
    entity.price = product.price;

    if (product.user) {
      entity.user = Object.assign(new UserEntity(), {
        id: product.user.id,
        name: product.user.name,
        email: product.user.email,
      });
    }

    return entity;
  }
}
