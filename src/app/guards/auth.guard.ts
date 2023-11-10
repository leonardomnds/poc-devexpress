import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  canActivate(_: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isLoginPage = state.url.startsWith('/login');
    const isUsuarioLogado = !!this.authService.getToken();

    if (isUsuarioLogado && isLoginPage) {
      this.router.navigate(['/home']);
      return false;
    }

    if (!isUsuarioLogado && !isLoginPage) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

}
