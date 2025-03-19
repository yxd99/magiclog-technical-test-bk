import { Controller, Get } from '@nestjs/common';

import { Public } from '@root/application/decorators/public.decorator';

@Public()
@Controller()
export class AppController {
  @Get('/health')
  health() {
    return {
      status: 'ok',
    };
  }
}
