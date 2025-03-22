import { ApiResponseOptions } from '@nestjs/swagger';

export const OkSchema: ApiResponseOptions = {
  description: 'List of products retrieved successfully',
  schema: {
    properties: {
      code: {
        type: 'number',
        description: 'Status code',
        example: 200,
      },
      name: {
        type: 'string',
        description: 'Response status',
        example: 'OK',
      },
      data: {
        type: 'array',
        description: 'List of products',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              format: 'uuid',
              description: 'Unique product identifier',
              example: 'f8034d05-69dc-4f65-bfd7-11f9448e3ec5',
            },
            name: {
              type: 'string',
              description: 'Product name',
              example: 'Test Product',
            },
            sku: {
              type: 'string',
              description: 'Stock Keeping Unit',
              example: '12312',
            },
            stock: {
              type: 'number',
              description: 'Quantity available in stock',
              example: 10,
            },
            price: {
              type: 'number',
              description: 'Product price',
              example: 99.99,
            },
            user: {
              type: 'object',
              description: 'User who owns the product',
              properties: {
                id: {
                  type: 'string',
                  format: 'uuid',
                  description: 'User ID',
                  example: '5b4af7a9-fa20-4f6b-8a58-1b29fc9114aa',
                },
                name: {
                  type: 'string',
                  description: 'User name',
                  example: 'Yesid',
                },
                email: {
                  type: 'string',
                  format: 'email',
                  description: 'User email',
                  example: 'correo@gmail.com',
                },
              },
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Timestamp when the product was created',
              example: '2025-03-22T08:16:23.842Z',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Timestamp when the product was last updated',
              example: '2025-03-22T08:16:23.842Z',
            },
            deletedAt: {
              type: 'string',
              format: 'date-time',
              description:
                'Timestamp when the product was deleted (if applicable)',
              example: null,
              nullable: true,
            },
          },
        },
      },
    },
  },
};
