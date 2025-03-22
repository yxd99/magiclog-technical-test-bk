import { ApiResponseOptions } from '@nestjs/swagger';

export const NotFoundSchema: ApiResponseOptions = {
  description: 'The requested product was not found',
  schema: {
    properties: {
      code: {
        type: 'number',
        description: 'Status code',
        example: 404,
      },
      name: {
        type: 'string',
        description: 'Error name',
        example: 'Not Found',
      },
      data: {
        type: 'string',
        description: 'Error message',
        example: 'Product not found',
      },
    },
  },
};
