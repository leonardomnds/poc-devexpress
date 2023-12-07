import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  readonly path = `${environment.reportsApiUrl}/relatorios`

  constructor(private http: HttpClient) { }

  getRelatorios(): Observable<any> {
    return this.http.get(this.path, { params: { ExibirInativos: true, OrdenarPor: 'nome' } });
  }

  getRelatoriosPorTenant(tenant: string): Observable<any> {
    return this.http.get(`${this.path}/tenant`, { params: { ExibirInativos: false, OrdenarPor: 'nome', Tenant: tenant } });
  }

  getRelatorio(id: number): Observable<any> {
    return this.http.get(`${this.path}/${id}`);
  }

  salvarRelatorio(nome: string, descricao: string, clienteId: number, grupoRelatorioId: number, tipoPlano: number): Observable<any> {
    return this.http.post(this.path, { nome, descricao, clienteId, grupoRelatorioId, tipoPlano });
  }

  vincularTenantRelatorio(relatorioId: number, clienteId: number): Observable<any> {
    return this.http.put(`${this.path}/vincular-tenant`, { relatorioId, clienteId });
  }

  desvincularTenantRelatorio(relatorioTenantId: number): Observable<any> {
    return this.http.put(`${this.path}/desvincular-tenant`, { relatorioTenantId });
  }

  liberarRelatorioClientes(relatorioId: number): Observable<any> {
    return this.http.put(`${this.path}/liberar-todos-clientes`, { relatorioId });
  }

  removerLiberacaoRelatorioClientes(relatorioId: number): Observable<any> {
    return this.http.put(`${this.path}/remover-liberacao-todos-clientes`, { relatorioId });
  }
}
