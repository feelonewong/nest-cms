import { BadRequestException } from '@nestjs/common';

export const validateFail = (field: string, message: string) => {
  throw new BadRequestException({
    statusCode: 400,
    message: message,
    error: 'Bad Request',
    errors: {
      [field]: message,
    },
  });
};
