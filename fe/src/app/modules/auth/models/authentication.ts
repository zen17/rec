import { AuthenticationService } from '../services/authentication.service';
import { ServicesDependencyInjection } from '../../core/models/services-dependency-injection';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class Authetication {

    private authenticationService: AuthenticationService;
    constructor(private readonly router: Router) {
        this.authenticationService = ServicesDependencyInjection.injector.get(AuthenticationService)

    }

    login(username: string, password: string, onSuccess?: (token) => void, onError?: (error: Error) => void) {
        this.authenticationService.getAuthToken(username, password)
            .subscribe(
                token => {
                    localStorage.setItem('access_token', token.access_token);
                    this.router.navigate(['list']);
                    if (onSuccess) {
                        onSuccess(token);
                    }
                },
                error => {
                    if (onError) {
                        onError(error);

                    }
                });
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['login']);
    }

    isLoggedin(): boolean {
        return localStorage.getItem('access_token') !== null;
    }

}
