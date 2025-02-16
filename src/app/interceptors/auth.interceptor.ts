import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.dev';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const authHeader = 'Basic ' + btoa(`${environment.clientUsername}:${environment.clientPassword}`);

  const authReq = req.clone({
    setHeaders: {
      Authorization: authHeader,
    }
  });

  console.log('Intercepted Request:', authReq);

  return next(authReq);
};
