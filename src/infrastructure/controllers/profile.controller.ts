import { Controller, Get, Query, Req } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { BadRequestSchema } from '@application/docs/profile/bad-request.schema';
import { OkSchema } from '@application/docs/profile/ok.schema';
import { UnauthorizedSchema } from '@application/docs/profile/unauthorized.schema';
import { ProductFiltersDto } from '@application/dtos/product/product-filters.dto';
import { UserService } from '@application/services/user.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly userService: UserService) {}

  @Get('products')
  @ApiOkResponse(OkSchema)
  @ApiBadRequestResponse(BadRequestSchema)
  @ApiUnauthorizedResponse(UnauthorizedSchema)
  getMyProducts(@Req() request, @Query() filters: ProductFiltersDto) {
    const {
      user: { sub },
    } = request;
    return this.userService.getMyProducts(sub, filters);
  }
}
