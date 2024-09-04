import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authservice: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let token = localStorage.getItem('token');
    // debugger;
    if (token) {
      console.log('request is on its way');
      req = req.clone({
        setHeaders: {
          Authorization:`${token}`,
        },
      });
    }
    console.log(req);
    return next.handle(req);
  }
}
