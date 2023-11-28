import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  urlbase = environment.api + 'api/';

  constructor(private http: HttpClient) { }

  salvarGrupo(descricao: string): Observable<any> {
    return this.http.post(this.urlbase + 'grupos-relatorios', {
      descricao,
    });
  }

  getRelatoriosRelatorios(): Observable<any> {
    return this.http.get(this.urlbase + 'grupos-relatorios/relatorios?&OrdenarPor=nome');
  }

  getRelatorios(): Observable<any> {
    return this.http.get(this.urlbase + 'grupos-relatorios?&OrdenarPor=nome');
  }
}
