import { Expose, Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

import { PaginationDto } from '@application/dtos/pagination.dto';

export class ProductFiltersDto extends PaginationDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  sku: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Expose({ name: 'min_price' })
  minPrice: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Expose({ name: 'max_price' })
  maxPrice: number;

  @IsOptional()
  @IsString()
  @Expose({ name: 'user_email' })
  userEmail: string;
}
