import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = localStorage.getItem('access_token');
        let authRequest = null;
        if (!authToken) {
            /*Header for login API calls*/
            authRequest = req.clone({
                headers: req.headers
                    .set('Content-Type', 'application/json')
            });
        } else {
            /*Set token in header*/
            console.log(authToken);
            authRequest = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + authToken)
            });
        }
        return next.handle(authRequest);
    }
}
