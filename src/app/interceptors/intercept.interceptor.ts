import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class InterceptInterceptor implements HttpInterceptor {

  constructor(private router:Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token');
    
    
    if (token) {
      // Clone the request to add the authorization header
      const clonedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(clonedRequest);
      
      return next.handle(clonedRequest);
    }else{
      this.router.navigate(['/']);
    }
    
    // Pass the original request if no token exists
    return next.handle(request);
  }
}
