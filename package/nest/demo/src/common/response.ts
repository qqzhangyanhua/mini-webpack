import { CallHandler, NestInterceptor } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
interface Data<T> {
  data: T;
}
export class Response<T> implements NestInterceptor {
  intercept(context, next: CallHandler): Observable<Data<T>> {
    return next
      .handle()
      .pipe(map((data) => ({ data, code: 200, message: 'success' })));
  }
}
