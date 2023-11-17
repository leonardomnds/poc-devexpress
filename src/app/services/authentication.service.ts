import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly loginUrl = environment.backoffice + '/auth';

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  login(email: string, senha: string) {
    return this.http.post(this.loginUrl, { email, senha })
      .pipe(tap((response: any) => this.setToken(response.data)));
  }

  logout() {
    this.localStorageService.remove('token');
  }

  getToken() {
    return this.localStorageService.get('token');
  }

  setToken(token: string): void {
    this.localStorageService.set('token', token);
  }
}
