import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
// import { HttpAdapterHost } from '@nestjs/core';

@Catch(HttpException)
export class CommonExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();

    const errException = JSON.parse(JSON.stringify(exception.getResponse()));

    response.status(status).json({
      status: false,
      message: errException?.message.toString(),
      statusCode: status,
      error: errException?.error
    });

    // console.log('error : ', exception.getResponse());
  }
}
