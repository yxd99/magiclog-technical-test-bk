import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { Public } from '@application/decorators/public.decorator';
import { LoginUserDto } from '@application/dtos/user/login-user.dto';
import { SignUpUserDto } from '@application/dtos/user/signup-user.dto';
import { AuthService } from '@application/services/auth.service';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: SignUpUserDto) {
    return this.authService.signUp(dto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() dto: LoginUserDto) {
    return this.authService.login(dto);
  }
}
