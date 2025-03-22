import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { Public } from '@application/decorators/public.decorator';
import { OkSchema } from '@application/docs/app/ok.schema';

@Public()
@Controller()
export class AppController {
  @Get('/health')
  @ApiOkResponse(OkSchema)
  health() {
    return {
      status: 'ok',
    };
  }
}
