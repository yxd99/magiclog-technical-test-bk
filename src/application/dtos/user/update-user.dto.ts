import { PartialType } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';

import { Role } from '@application/enums/roles';
import { SignUpUserDto } from '@root/application/dtos/user/signup-user.dto';

export class UpdateUserDto extends PartialType(SignUpUserDto) {
  @IsEnum(Role)
  role: Role;
}
