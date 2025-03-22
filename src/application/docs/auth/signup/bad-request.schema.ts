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
        example: [
          'name must be a string',
          'email must be an email',
          'password must be shorter than or equal to 25 characters',
          'password must be longer than or equal to 6 characters',
          'password must be a string',
        ],
      },
    },
  },
};
