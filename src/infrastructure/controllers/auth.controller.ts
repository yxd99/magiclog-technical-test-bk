import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { Public } from '@application/decorators/public.decorator';
import * as LoginSchema from '@application/docs/auth/login';
import * as SingupSchema from '@application/docs/auth/signup';
import { LoginUserDto } from '@application/dtos/auth/login-user.dto';
import { SignUpUserDto } from '@application/dtos/auth/signup-user.dto';
import { AuthService } from '@application/services/auth.service';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @ApiCreatedResponse(SingupSchema.CreatedSchema)
  @ApiBadRequestResponse(SingupSchema.BadRequestSchema)
  @ApiConflictResponse(SingupSchema.ConflictSchema)
  signup(@Body() dto: SignUpUserDto) {
    return this.authService.signUp(dto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse(LoginSchema.OkSchema)
  @ApiBadRequestResponse(LoginSchema.BadRequestSchema)
  @ApiUnauthorizedResponse(LoginSchema.UnauthorizedSchema)
  login(@Body() dto: LoginUserDto) {
    return this.authService.login(dto);
  }
}
