import { ApiResponseOptions } from '@nestjs/swagger';

export const UnauthorizedSchema: ApiResponseOptions = {
  description: 'Unauthorized access',
  schema: {
    oneOf: [
      {
        type: 'object',
        properties: {
          code: {
            type: 'number',
            description: 'Status code',
            example: 401,
          },
          name: {
            type: 'string',
            description: 'Error name',
            example: 'Unauthorized',
          },
          data: {
            type: 'string',
            description: 'Error message',
            example: "You aren't the owner of this product",
          },
        },
      },
      {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'Error message',
            example: 'Token missing',
          },
          error: {
            type: 'string',
            description: 'Error name',
            example: 'Unauthorized',
          },
          statusCode: {
            type: 'number',
            description: 'Status code',
            example: 401,
          },
        },
      },
    ],
  },
};
