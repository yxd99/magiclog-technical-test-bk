import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class SignUpUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(25)
  password: string;
}
