import { ApiResponseOptions } from '@nestjs/swagger';

export const ConflictSchema: ApiResponseOptions = {
  description: 'Conflict: The provided email is already in use',
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
        example: 'Email already in use',
      },
    },
  },
};
