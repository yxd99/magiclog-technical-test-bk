import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, Max, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @ApiProperty({ required: false })
  page: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(50)
  @ApiProperty({ required: false })
  limit: number = 15;
}
