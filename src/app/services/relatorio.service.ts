import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {
  urlbase = environment.api + 'api/';

  constructor(private http: HttpClient) { }

  getRelatorios(): Observable<any> {
    return this.http.get(this.urlbase + 'report-items');
  }

  getRelatorio(id: number): Observable<any> {
    return this.http.get(this.urlbase + `report-items/${id}`);
  }

  updateRelatorio(id: number, reportItem: any): Observable<any> {
    return this.http.put(this.urlbase + `report-items/${id}`, reportItem);
  }

  salvarRelatorio(nome: string, tituloRelatorio: string): Observable<any> {
    return this.http.post(this.urlbase + 'report-items', {
      name: nome,
      DisplayName: tituloRelatorio
    });
  }

  deleteRelatorio(id: number): Observable<any> {
    return this.http.delete(this.urlbase + `report-items/${id}`);
  }
}
