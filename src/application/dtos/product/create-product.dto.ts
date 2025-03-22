import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString, Min, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(2)
  @ApiProperty()
  name: string;

  @IsString()
  @MinLength(2)
  @ApiProperty()
  sku: string;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @ApiProperty()
  stock: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @ApiProperty()
  price: number;
}
