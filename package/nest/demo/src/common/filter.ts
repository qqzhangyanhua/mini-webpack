import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

import { Response, Request } from 'express';
@Catch()
export class HttpFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.status;
    response.status(status).json({
      status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception,
      success: false,
    });
  }
}
