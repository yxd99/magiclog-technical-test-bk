import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
} from '@nestjs/common';

import { Public } from '@application/decorators/public.decorator';
import { Roles } from '@application/decorators/roles.decorator';
import { CreateProductDto } from '@application/dtos/product/create-product.dto';
import { ProductAdminFiltersDto } from '@application/dtos/product/product-admin-filters.dto';
import { ProductFiltersDto } from '@application/dtos/product/product-filters.dto';
import { UpdateProductDto } from '@application/dtos/product/update-product.dto';
import { Role } from '@application/enums/roles';
import { ProductService } from '@application/services/product.service';

@Roles(Role.ADMIN, Role.SELLER)
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Roles(Role.ADMIN)
  @Get('admin')
  findAllAdmin(@Query() filters: ProductAdminFiltersDto) {
    return this.productService.findAllAdmin(filters);
  }

  @Public()
  @Get()
  findAll(@Query() filters: ProductFiltersDto) {
    return this.productService.findAll(filters);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateProductDto, @Req() request) {
    const {
      user: { sub },
    } = request;
    return this.productService.create(dto, sub);
  }

  @Patch(':id')
  update(
    @Body() dto: UpdateProductDto,
    @Param('id') id: string,
    @Req() request,
  ) {
    const {
      user: { sub },
    } = request;
    return this.productService.update(id, dto, sub);
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Req() request) {
    const {
      user: { sub },
    } = request;
    return this.productService.delete(id, sub);
  }
}
