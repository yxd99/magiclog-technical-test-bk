import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from '@infrastructure/controllers/app.controller';
import { typeormConfig } from '@infrastructure/db/typeorm';
import { AuthModule } from '@infrastructure/modules/auth.module';
import { ProductModule } from '@infrastructure/modules/product.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig()), AuthModule, ProductModule],
  providers: [Logger],
  controllers: [AppController],
})
export class AppModule {}
