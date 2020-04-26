import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private readonly router: Router) {
  }

  canActivate(): boolean {
      const isAccessToken = localStorage.getItem('access_token');

      if (isAccessToken) {
          return true;
      }
      this.router.navigate(['login']);
      return false;
  }

}
