import { ValidationError, ValidationPipe } from '@nestjs/common';

export class ValidatePipeCustom extends ValidationPipe {
  //   重写ValidationPipe处理错误
  protected flattenValidationErrors(
    validationErrors: ValidationError[],
  ): any[] {
    return validationErrors.map((error) => {
      return {
        field: error.property,
        message: Object.values(error.constraints)[0],
      };
    });
  }
}
