import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from '@application/services/user.service';
import { UserRepository } from '@domain/repositories/user.repository';
import { ProfileController } from '@infrastructure/controllers/profile.controller';
import { UserEntity } from '@infrastructure/db/entities/user.entity';
import { ProductModule } from '@infrastructure/modules/product.module';
import { UserRepositoryImpl } from '@infrastructure/repositories/user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    forwardRef(() => ProductModule),
  ],
  providers: [
    UserService,
    {
      provide: UserRepository,
      useClass: UserRepositoryImpl,
    },
  ],
  exports: [UserService, UserRepository],
  controllers: [ProfileController],
})
export class UserModule {}
