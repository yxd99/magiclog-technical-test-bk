import { ApiResponseOptions } from '@nestjs/swagger';

export const CreatedSchema: ApiResponseOptions = {
  description: 'The user has been created',
  schema: {
    properties: {
      code: {
        type: 'number',
        description: 'Status code',
        example: 201,
      },
      name: {
        type: 'string',
        description: 'Error name',
        example: 'Created',
      },
      data: {
        type: 'object',
        description: 'Response data',
        example: {
          id: 'e002254c-a066-4a4f-a2a1-f6f4926e7256',
          name: 'string',
          email: 'example@example.com',
          role: 'seller',
          accessToken: 'string',
        },
      },
    },
  },
};
