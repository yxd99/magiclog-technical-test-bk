import { ApiResponseOptions } from '@nestjs/swagger';

export const FindAllAdminBadRequestSchema: ApiResponseOptions = {
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
          description: 'Validation error message',
          example: [
            'page must not be less than 1',
            'page must be a number conforming to the specified constraints',
            'limit must not be greater than 50',
            'limit must not be less than 1',
            'limit must be a number conforming to the specified constraints',
            'minPrice must not be less than 0',
            'minPrice must be a number conforming to the specified constraints',
            'maxPrice must not be less than 0',
            'maxPrice must be a number conforming to the specified constraints',
          ],
        },
      },
    },
  },
};

export const FindAllBadRequestSchema: ApiResponseOptions = {
  description: 'Bad Request: Invalid query parameters',
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
  },
};

export const CreateBadRequestSchema: ApiResponseOptions = {
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
      message: {
        type: 'object',
        description: 'Error details',
        example: {
          code: 400,
          name: 'Bad Request',
          data: [
            'property code should not exist',
            'property data should not exist',
            'sku must be longer than or equal to 2 characters',
            'sku must be a string',
            'stock must not be less than 0',
            'stock must be a number conforming to the specified constraints',
            'price must not be less than 0',
            'price must be a number conforming to the specified constraints',
          ],
        },
      },
    },
  },
};
