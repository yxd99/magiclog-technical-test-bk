import { User } from './user.entity';

export class Product {
  constructor(
    public readonly id: string | null,
    public name: string,
    public sku: string,
    public stock: number,
    public price: number,
    public user: User,
    public createdAt?: Date,
    public updatedAt?: Date,
    public deletedAt?: Date,
  ) {}

  static create(data: Partial<Product>): Product {
    return new Product(
      data.id ?? null,
      data.name,
      data.sku,
      data.stock,
      data.price,
      data.user,
      data.createdAt,
      data.updatedAt,
      data.deletedAt,
    );
  }

  async validateOwner(userId: string) {
    return userId === this.user.id;
  }
}
