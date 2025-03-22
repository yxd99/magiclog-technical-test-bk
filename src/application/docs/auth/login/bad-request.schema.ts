import { ApiResponseOptions } from '@nestjs/swagger';

export const BadRequestSchema: ApiResponseOptions = {
  description: 'Missing or invalid data',
  schema: {
    properties: {
      code: {
        type: 'number',
        description: 'Status code',
        example: 400,
      },
      name: {
        type: 'string',
        description: 'Error name',
        example: 'Bad Request',
      },
      data: {
        type: 'object',
        description: 'Response data',
        example: ['email must be an email', 'password should not be empty'],
      },
    },
  },
};
