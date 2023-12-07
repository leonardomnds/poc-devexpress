import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { fetchSetup } from '@devexpress/analytics-core/analytics-utils';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly eugestorLoginUrl = `${environment.eugestorApiUrl}/auth`;
  readonly backofficeLoginUrl = `${environment.backofficeApiUrl}/auth`;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private localStorageService: LocalStorageService
  ) { }

  loginSuporte(email: string, senha: string) {
    return this.http.post(this.backofficeLoginUrl, { email, senha })
      .pipe(tap((response: any) => this.setToken(response.data)));
  }

  loginCliente(email: string, senha: string) {
    return this.http.post(this.eugestorLoginUrl, { email, senha })
      .pipe(tap((response: any) => this.setToken(response.data)));
  }

  logout() {
    this.localStorageService.remove('token');
  }

  getToken() {
    const token = this.localStorageService.get('token');

    if (token) {
      fetchSetup.fetchSettings = { headers: { Authorization: `Bearer ${token}` } };
    }

    return token;
  }

  setToken(token: string): void {
    this.localStorageService.set('token', token);
  }

  get isCliente(): boolean {
    const data = this.jwtHelper.decodeToken(this.getToken());
    return data['aud'] === 'EuGestor.Client';
  }

  get isSuporte(): boolean {
    const data = this.jwtHelper.decodeToken(this.getToken());
    return data['aud'] === 'EuGestor.Backoffice';
  }
}
