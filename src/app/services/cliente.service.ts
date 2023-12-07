import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  readonly path = `${environment.reportsApiUrl}/clientes`

  constructor(private http: HttpClient) { }

  getClientes(): Observable<any> {
    return this.http.get(this.path, { params: { OrdenarPor: 'nome' } });
  }

  salvarCliente(nome: string, cpfcnpj: string, tenant: string, tipoPlano: number): Observable<any> {
    return this.http.post(this.path, { nome, cpfcnpj, tenant, tipoPlano });
  }
}
