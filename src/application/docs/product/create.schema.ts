import { ApiResponseOptions } from '@nestjs/swagger';

export const CreatedSchema: ApiResponseOptions = {
  description: 'The product has been created', // pendiente
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
          id: 'f8034d05-69dc-4f65-bfd7-11f9448e3ec5',
          name: 'test',
          sku: '12312',
          stock: 1,
          price: 0,
          user: {
            id: '5b4af7a9-fa20-4f6b-8a58-1b29fc9114aa',
            name: 'Yesid',
            email: 'correo@gmail.com',
          },
        },
      },
    },
  },
};
