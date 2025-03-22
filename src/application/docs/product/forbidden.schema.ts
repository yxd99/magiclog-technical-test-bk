import { ApiResponseOptions } from '@nestjs/swagger';

export const ForbiddenSchema: ApiResponseOptions = {
  description: 'Access to the requested resource is forbidden',
  schema: {
    properties: {
      statusCode: {
        type: 'number',
        description: 'Status code',
        example: 403,
      },
      error: {
        type: 'string',
        description: 'Error name',
        example: 'Forbidden',
      },
      message: {
        type: 'string',
        description: 'Error message',
        example: 'Forbidden resource',
      },
    },
  },
};
