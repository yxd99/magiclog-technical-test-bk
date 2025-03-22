import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';

import { SignUpUserDto } from '@application/dtos/auth/signup-user.dto';
import { Role } from '@application/enums/roles';

export class UpdateUserDto extends PartialType(SignUpUserDto) {
  @IsEnum(Role)
  @ApiProperty()
  role: Role;
}
