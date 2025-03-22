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
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { Public } from '@application/decorators/public.decorator';
import { Roles } from '@application/decorators/roles.decorator';
import {
  CreateBadRequestSchema,
  FindAllAdminBadRequestSchema,
  FindAllBadRequestSchema,
} from '@application/docs/product/bad-request.schema';
import { ConflictSchema } from '@application/docs/product/conflict.schema';
import { CreatedSchema } from '@application/docs/product/create.schema';
import { ForbiddenSchema } from '@application/docs/product/forbidden.schema';
import { NotFoundSchema } from '@application/docs/product/not-found.chema ';
import {
  OkSchema,
  FindAllAdminOkSchema,
  FindAllOkSchema,
} from '@application/docs/product/ok.schema';
import { UnauthorizedSchema } from '@application/docs/product/unauthorized.schema';
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
  @ApiOkResponse(FindAllAdminOkSchema)
  @ApiBadRequestResponse(FindAllAdminBadRequestSchema)
  @ApiForbiddenResponse(ForbiddenSchema)
  findAllAdmin(@Query() filters: ProductAdminFiltersDto) {
    return this.productService.findAllAdmin(filters);
  }

  @Public()
  @Get()
  @ApiOkResponse(FindAllOkSchema)
  @ApiBadRequestResponse(FindAllBadRequestSchema)
  findAll(@Query() filters: ProductFiltersDto) {
    return this.productService.findAll(filters);
  }

  @Public()
  @Get(':id')
  @ApiOkResponse(OkSchema)
  @ApiNotFoundResponse(NotFoundSchema)
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Post()
  @ApiBadRequestResponse(CreateBadRequestSchema)
  @ApiForbiddenResponse(ForbiddenSchema)
  @ApiCreatedResponse(CreatedSchema)
  @ApiNotFoundResponse(NotFoundSchema)
  @ApiConflictResponse(ConflictSchema)
  create(@Body() dto: CreateProductDto, @Req() request) {
    const {
      user: { sub },
    } = request;
    return this.productService.create(dto, sub);
  }

  @Patch(':id')
  @ApiOkResponse(OkSchema)
  @ApiForbiddenResponse(ForbiddenSchema)
  @ApiNotFoundResponse(NotFoundSchema)
  @ApiUnauthorizedResponse(UnauthorizedSchema)
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
  @ApiOkResponse(OkSchema)
  @ApiForbiddenResponse(ForbiddenSchema)
  @ApiNotFoundResponse(NotFoundSchema)
  @ApiUnauthorizedResponse(UnauthorizedSchema)
  delete(@Param('id') id: string, @Req() request) {
    const {
      user: { sub },
    } = request;
    return this.productService.delete(id, sub);
  }
}
