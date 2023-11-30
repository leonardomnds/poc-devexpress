import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContaService {
  urlbase = environment.api + 'api/';

  constructor(private http: HttpClient) { }

  getContas(): Observable<any> {
    return this.http.get(this.urlbase + 'contas?&OrdenarPor=nome');
  }
}
