import { ApiResponseOptions } from '@nestjs/swagger';

export const OkSchema: ApiResponseOptions = {
  description: 'Successfully retrieved the requested product',
  schema: {
    properties: {
      code: {
        type: 'number',
        description: 'Status code',
        example: 200,
      },
      name: {
        type: 'string',
        description: 'Response name',
        example: 'OK',
      },
      data: {
        type: 'object',
        description: 'Product details',
        properties: {
          id: {
            type: 'string',
            description: 'Product ID',
            example: 'f8034d05-69dc-4f65-bfd7-11f9448e3ec5',
          },
          name: {
            type: 'string',
            description: 'Product name',
            example: 'test',
          },
          sku: {
            type: 'string',
            description: 'Stock Keeping Unit',
            example: '12312',
          },
          stock: {
            type: 'number',
            description: 'Stock quantity',
            example: 1,
          },
          price: {
            type: 'number',
            description: 'Product price',
            example: 0,
          },
          user: {
            type: 'object',
            description: 'User who owns the product',
            properties: {
              id: {
                type: 'string',
                description: 'User ID',
                example: '5b4af7a9-fa20-4f6b-8a58-1b29fc9114aa',
              },
              name: {
                type: 'string',
                description: 'User name',
                example: 'Jhon Doe',
              },
              email: {
                type: 'string',
                description: 'User email',
                example: 'correo@gmail.com',
              },
            },
          },
        },
      },
    },
  },
};

export const FindAllAdminOkSchema: ApiResponseOptions = {
  description: 'Successfully retrieved the requested data',
  schema: {
    properties: {
      code: {
        type: 'number',
        description: 'Status code',
        example: 200,
      },
      name: {
        type: 'string',
        description: 'Response name',
        example: 'OK',
      },
      data: {
        type: 'array',
        description: 'List of retrieved items',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Product ID',
              example: 'f8034d05-69dc-4f65-bfd7-11f9448e3ec5',
            },
            name: {
              type: 'string',
              description: 'Product name',
              example: 'test',
            },
            sku: {
              type: 'string',
              description: 'Stock Keeping Unit',
              example: '12312',
            },
            stock: {
              type: 'number',
              description: 'Stock quantity',
              example: 1,
            },
            price: {
              type: 'number',
              description: 'Product price',
              example: 0,
            },
            user: {
              type: 'object',
              description: 'User who owns the product',
              properties: {
                id: {
                  type: 'string',
                  description: 'User ID',
                  example: '5b4af7a9-fa20-4f6b-8a58-1b29fc9114aa',
                },
                name: {
                  type: 'string',
                  description: 'User name',
                  example: 'Jhon Doe',
                },
                email: {
                  type: 'string',
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
                'Timestamp when the product was deleted (null if not deleted)',
              example: null,
              nullable: true,
            },
          },
        },
      },
    },
  },
};

export const FindAllOkSchema: ApiResponseOptions = {
  description: 'Successfully retrieved the requested data',
  schema: {
    properties: {
      code: {
        type: 'number',
        description: 'Status code',
        example: 200,
      },
      name: {
        type: 'string',
        description: 'Response name',
        example: 'OK',
      },
      data: {
        type: 'array',
        description: 'List of retrieved items',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Product ID',
              example: 'f8034d05-69dc-4f65-bfd7-11f9448e3ec5',
            },
            name: {
              type: 'string',
              description: 'Product name',
              example: 'test',
            },
            sku: {
              type: 'string',
              description: 'Stock Keeping Unit',
              example: '12312',
            },
            stock: {
              type: 'number',
              description: 'Stock quantity',
              example: 1,
            },
            price: {
              type: 'number',
              description: 'Product price',
              example: 0,
            },
            user: {
              type: 'object',
              description: 'User who owns the product',
              properties: {
                id: {
                  type: 'string',
                  description: 'User ID',
                  example: '5b4af7a9-fa20-4f6b-8a58-1b29fc9114aa',
                },
                name: {
                  type: 'string',
                  description: 'User name',
                  example: 'Jhon Doe',
                },
                email: {
                  type: 'string',
                  description: 'User email',
                  example: 'correo@gmail.com',
                },
              },
            },
          },
        },
      },
    },
  },
};
