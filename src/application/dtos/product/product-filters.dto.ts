import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

import { PaginationDto } from '@application/dtos/pagination.dto';

export class ProductFiltersDto extends PaginationDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  name: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  sku: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Expose({ name: 'min_price' })
  @ApiProperty({ required: false })
  minPrice: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Expose({ name: 'max_price' })
  @ApiProperty({ required: false })
  maxPrice: number;
}
