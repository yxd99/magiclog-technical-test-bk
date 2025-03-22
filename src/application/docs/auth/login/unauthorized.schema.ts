import { ApiResponseOptions } from '@nestjs/swagger';

export const UnauthorizedSchema: ApiResponseOptions = {
  description: 'User not found or invalid credentials',
  schema: {
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
        description: 'Response data',
        example: 'Invalid credentials',
      },
    },
  },
};
