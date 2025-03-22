import { ApiResponseOptions } from '@nestjs/swagger';

export const BadRequestSchema: ApiResponseOptions = {
  description: 'The request contains invalid data',
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
        type: 'array',
        description: 'List of validation errors',
        items: {
          type: 'string',
        },
        example: [
          'minPrice must not be less than 0',
          'minPrice must be a number conforming to the specified constraints',
          'maxPrice must not be less than 0',
          'maxPrice must be a number conforming to the specified constraints',
          'page must not be less than 1',
          'page must be a number conforming to the specified constraints',
          'limit must not be greater than 50',
          'limit must not be less than 1',
          'limit must be a number conforming to the specified constraints',
        ],
      },
    },
  },
};
