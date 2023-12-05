import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  canActivate(_: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isCliente) { return true; }

    this.router.navigate(['/home']);
    return false;
  }
}
