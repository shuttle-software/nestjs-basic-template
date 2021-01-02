import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { InvalidArgException } from 'src/exceptions/invalid-argument.exception';
import { InvalidInputException } from 'src/exceptions/invalid-input.exception';

@Catch(InvalidInputException, InvalidArgException)
export class InvalidInputFilter implements ExceptionFilter {
  catch(exception: InvalidInputException|InvalidArgException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    
    response
      .status(400)
      .json({
        err: exception.errors,
        timestamp: new Date().toISOString(),
        statusCode: 400
      });
  }
}