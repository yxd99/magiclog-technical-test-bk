import { ApiResponseOptions } from '@nestjs/swagger';

export const ConflictSchema: ApiResponseOptions = {
  description: 'A conflict occurred with the request data',
  schema: {
    properties: {
      code: {
        type: 'number',
        description: 'Status code',
        example: 409,
      },
      name: {
        type: 'string',
        description: 'Error name',
        example: 'Conflict',
      },
      data: {
        type: 'string',
        description: 'Error message',
        example: 'SKU is already registered for this user',
      },
    },
  },
};
