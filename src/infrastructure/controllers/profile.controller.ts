import { Controller, Get, Query, Req } from '@nestjs/common';

import { ProductFiltersDto } from '@application/dtos/product/product-filters.dto';
import { UserService } from '@application/services/user.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly userService: UserService) {}

  @Get('products')
  getMyProducts(@Req() request, @Query() filters: ProductFiltersDto) {
    const {
      user: { sub },
    } = request;
    return this.userService.getMyProducts(sub, filters);
  }
}
