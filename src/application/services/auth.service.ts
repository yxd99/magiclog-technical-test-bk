import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { LoginUserDto } from '@application/dtos/user/login-user.dto';
import { SignUpUserDto } from '@application/dtos/user/signup-user.dto';
import { UserResponseDto } from '@application/dtos/user/user-response.dto';
import { User } from '@domain/entities/user.entity';
import { UserRepository } from '@domain/repositories/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(
    dto: SignUpUserDto,
  ): Promise<Omit<UserResponseDto, 'password'> & { accessToken: string }> {
    const existingUser = await this.userRepository.findByEmail(dto.email);
    if (existingUser) {
      throw new ConflictException('Email already in use');
    }

    const newUser = await User.create(dto);
    const user = await this.userRepository.create(newUser);
    const response = new UserResponseDto(user);
    const { accessToken } = await this.login({
      email: dto.email,
      password: dto.password,
    });
    return { ...response, accessToken };
  }

  async login(dto: LoginUserDto): Promise<{ accessToken: string }> {
    const user = await this.userRepository.getUserWithPassword(dto.email);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isPasswordValid = await user.validatePassword(dto.password);
    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid credentials');

    const payload = { sub: user.id, email: user.email, role: user.role };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
}
