import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

import { ProductFiltersDto } from './product-filters.dto';

export class ProductAdminFiltersDto extends ProductFiltersDto {
  @IsOptional()
  @IsString()
  @Expose({ name: 'user_email' })
  @ApiProperty({ required: false })
  userEmail: string;

  @IsOptional()
  @IsString()
  @Expose({ name: 'user_name' })
  @ApiProperty({ required: false })
  userName: string;
}
