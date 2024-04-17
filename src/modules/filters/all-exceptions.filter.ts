import {
  ArgumentsHost,
  BadRequestException,
  Catch, ConflictException,
  ExceptionFilter,
  ForbiddenException,
  HttpException,
  HttpStatus,
  NotFoundException,
  UnauthorizedException
} from "@nestjs/common";


@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = HttpStatus.INTERNAL_SERVER_ERROR;
    const message = "Internal Server Error";

    if (exception instanceof HttpException) {
      if (exception instanceof NotFoundException) {
        return response.status(200).json({
          success: false,
          message: exception.message
        });
      } else if (exception instanceof BadRequestException) {
        return response.status(400).json({
          success: false,
          message: exception.message
        });
      } else if (exception instanceof UnauthorizedException) {
        return response.status(401).json({
          success: false,
          message: exception.message
        });
      } else if (exception instanceof ForbiddenException) {
        return response.status(403).json({
          success: false,
          message: exception.message
        });
      } else if (exception instanceof ConflictException) {
        return response.status(HttpStatus.CONFLICT).json({
          success: false,
          message: exception.message
        });
      }
    } else {
      return response.status(200).json({
        success: false,
        message: "Internal server error"
      });
    }
  }
}
