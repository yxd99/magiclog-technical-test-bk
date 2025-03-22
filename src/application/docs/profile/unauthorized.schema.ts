import { ApiResponseOptions } from '@nestjs/swagger';

export const UnauthorizedSchema: ApiResponseOptions = {
  description: 'Unauthorized access - Invalid token',
  schema: {
    properties: {
      message: {
        type: 'string',
        description: 'Error message',
        example: 'Invalid token',
      },
      error: {
        type: 'string',
        description: 'Error type',
        example: 'Unauthorized',
      },
      statusCode: {
        type: 'number',
        description: 'HTTP status code',
        example: 401,
      },
    },
  },
};
