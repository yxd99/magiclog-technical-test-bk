import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductService } from '@application/services/product.service';
import { ProductRepository } from '@domain/repositories/product.repository';
import { ProductController } from '@infrastructure/controllers/product.controller';
import { ProductEntity } from '@infrastructure/db/entities/product.entity';
import { UserModule } from '@infrastructure/modules/user.module';
import { ProductRepositoryImpl } from '@infrastructure/repositories/product.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
    forwardRef(() => UserModule),
  ],
  controllers: [ProductController],
  providers: [
    ProductService,
    {
      provide: ProductRepository,
      useClass: ProductRepositoryImpl,
    },
  ],
  exports: [ProductService, ProductRepository],
})
export class ProductModule {}
