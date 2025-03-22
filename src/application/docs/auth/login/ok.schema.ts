import { ApiResponseOptions } from '@nestjs/swagger';

export const OkSchema: ApiResponseOptions = {
  description: 'login successful',
  schema: {
    properties: {
      code: {
        type: 'number',
        description: 'Status code',
        example: 200,
      },
      name: {
        type: 'string',
        description: 'Error name',
        example: 'OK',
      },
      data: {
        type: 'object',
        description: 'Response data',
        example: {
          status: 'ok',
        },
      },
    },
  },
};
