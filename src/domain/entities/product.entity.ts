import { User } from './user.entity';

export class Product {
  constructor(
    public readonly id: string | null,
    public name: string,
    public sku: string,
    public stock: number,
    public price: number,
    public user: User,
  ) {}

  static create(data: Partial<Product>): Product {
    return new Product(
      data.id ?? null,
      data.name,
      data.sku,
      data.stock,
      data.price,
      data.user,
    );
  }

  async validateOwner(userId: string) {
    return userId === this.user.id;
  }
}
