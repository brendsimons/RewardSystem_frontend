import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        console.log("oke");

        let access_token = localStorage.getItem('access_token');
        if (access_token != null) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${access_token}`
                }
            });
        }

        return next.handle(request);
    }
}