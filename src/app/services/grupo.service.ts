import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  readonly path = `${environment.reportsApiUrl}/grupos-relatorios`

  constructor(private http: HttpClient) { }

  salvarGrupo(descricao: string): Observable<any> {
    return this.http.post(this.path, { descricao });
  }

  getRelatoriosRelatorios(): Observable<any> {
    return this.http.get(`${this.path}/relatorios`, { params: { OrdenarPor: 'nome' } });
  }

  getRelatorios(): Observable<any> {
    return this.http.get(this.path, { params: { OrdenarPor: 'nome' } });
  }
}
