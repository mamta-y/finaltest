import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('interceptor called');
    const modifiedRequest = request.clone({
      headers:request.headers.append('authorization',`Bearer`)
    })
    
     return handler.handle(request);
   }
  }

