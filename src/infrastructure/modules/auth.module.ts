import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';

import { AuthGuard } from '@application/guards/auth.guard';
import { RolesGuard } from '@application/guards/roles.guard';
import { AuthService } from '@application/services/auth.service';
import { envs } from '@infrastructure/config/envs';
import { AuthController } from '@infrastructure/controllers/auth.controller';
import { UserModule } from '@infrastructure/modules/user.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: envs.JWT_SECRET,
      signOptions: { expiresIn: envs.JWT_EXPIRES_IN },
    }),
    UserModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
    AuthService,
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
