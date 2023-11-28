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
    return this.http.get(this.urlbase + 'relatorios?ExibirInativos=true&OrdenarPor=nome');
  }

  getRelatoriosPorTenant(tenant: string): Observable<any> {
    return this.http.get(this.urlbase + 'relatorios/tenant?ExibirInativos=false&OrdenarPor=nome&Tenant=' + tenant);
  }

  getRelatorio(id: number): Observable<any> {
    return this.http.get(this.urlbase + `relatorios/${id}`);
  }

  salvarRelatorio(nome: string, descricao: string, tenant: string, grupoRelatorioId: number): Observable<any> {
    return this.http.post(this.urlbase + 'relatorios', {
      nome,
      descricao,
      tenant,
      grupoRelatorioId
    });
  }

  vincularTenantRelatorio(relatorioId: number, tenant: string): Observable<any> {
    return this.http.put(this.urlbase + 'relatorios/vincular-tenant', {
      relatorioId,
      tenant
    });
  }

  desvincularTenantRelatorio(relatorioTenantId: number): Observable<any> {
    return this.http.put(this.urlbase + 'relatorios/desvincular-tenant', {
      relatorioTenantId
    });
  }
}
