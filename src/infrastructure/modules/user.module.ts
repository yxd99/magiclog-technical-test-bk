import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from '@application/services/user.service';
import { UserRepository } from '@domain/repositories/user.repository';
import { UserEntity } from '@infrastructure/db/entities/user.entity';
import { UserRepositoryImpl } from '@infrastructure/repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    UserService,
    {
      provide: UserRepository,
      useClass: UserRepositoryImpl,
    },
  ],
  exports: [UserService, UserRepository],
})
export class UserModule {}
