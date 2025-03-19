import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from '@infrastructure/controllers/app.controller';
import { typeormConfig } from '@infrastructure/db/typeorm';
import { AuthModule } from '@infrastructure/modules/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig()), AuthModule],
  providers: [Logger],
  controllers: [AppController],
})
export class AppModule {}
