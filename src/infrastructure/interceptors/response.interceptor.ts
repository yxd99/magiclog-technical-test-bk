import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  Logger,
} from '@nestjs/common';
import { getReasonPhrase } from 'http-status-codes';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      map((data) => {
        const response = context.switchToHttp().getResponse();
        const { statusCode } = response;
        const name = getReasonPhrase(statusCode);

        const result = {
          name,
          code: statusCode,
          data: data || null,
        };

        if (statusCode >= 400) {
          throw new HttpException(result.data, statusCode);
        }

        return result;
      }),
      catchError((error) => {
        Logger.error(error);
        const status = error.status || 500;
        const response = {
          code: status,
          name: getReasonPhrase(status),
          data: error.response?.message ?? {},
        };
        return throwError(() => new HttpException(response, error.status));
      }),
    );
  }
}
