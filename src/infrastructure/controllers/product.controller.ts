import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';

import { Roles } from '@application/decorators/roles.decorator';
import { CreateProductDto } from '@application/dtos/product/create-product.dto';
import { UpdateProductDto } from '@application/dtos/product/update-product.dto';
import { Role } from '@application/enums/roles';
import { ProductService } from '@application/services/product.service';

@Roles(Role.ADMIN, Role.SELLER)
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Roles(Role.ADMIN, Role.SELLER, Role.USER)
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Roles(Role.ADMIN, Role.SELLER, Role.USER)
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
