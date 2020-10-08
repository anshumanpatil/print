import { ExceptionFilter, Catch, HttpException, ArgumentsHost, HttpStatus } from '@nestjs/common';

@Catch()
export class ErrorFilter implements ExceptionFilter {
    // console.log("ErrorFilter", error);
    
    catch(error: Error, host: ArgumentsHost) {
        console.log("ErrorFilter", error);
    let response = host.switchToHttp().getResponse();
    let status = (error instanceof HttpException) ? error.getStatus(): HttpStatus.INTERNAL_SERVER_ERROR;

    if (status === HttpStatus.UNAUTHORIZED) 
        return response.status(status).json(error);
    if (status === HttpStatus.NOT_FOUND) 
        return response.status(status).json(error);
    if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
        return response.status(404).json(error);
    }
  }
}
