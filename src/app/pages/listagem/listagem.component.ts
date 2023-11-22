import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RelatorioService } from 'src/app/services/relatorio.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  tenantPesquisa: string = '';
  reportItems: any[];

  constructor(
    private router: Router,
    private relatorioService: RelatorioService) { }

  ngOnInit(): void {
    this.relatorioService.getRelatorios().subscribe(items => {
      this.reportItems = items.data.lista;
    });
  }

  pesquisarPorTenant(): void {
    this.relatorioService.getRelatoriosPorTenant(this.tenantPesquisa).subscribe(items => {
        this.reportItems = items.data.lista;
    });
  }

  selecionarRelatorio(relatorioId: number): void {
    this.router.navigate(['/vinculo-tenant', relatorioId]);
  }

  voltar(): void {
    this.router.navigate(['/']);
  }
}
