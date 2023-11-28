import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GrupoService } from 'src/app/services/grupo.service';
import { RelatorioService } from 'src/app/services/relatorio.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  tenantPesquisa: string = '';
  gruposRelatorios: any[];

  constructor(
    private router: Router,
    private relatorioService: RelatorioService,
    private grupoRelatorioService: GrupoService) { }

  ngOnInit(): void {
    this.grupoRelatorioService.getRelatoriosRelatorios().subscribe(items => {
      this.gruposRelatorios = items.data;
    });
  }

  pesquisarPorTenant(): void {
    this.relatorioService.getRelatoriosPorTenant(this.tenantPesquisa).subscribe(items => {
        this.gruposRelatorios = items.data.lista;
    });
  }

  selecionarRelatorio(relatorioId: number): void {
    this.router.navigate(['/vinculo-tenant', relatorioId]);
  }

  voltar(): void {
    this.router.navigate(['/']);
  }
}
