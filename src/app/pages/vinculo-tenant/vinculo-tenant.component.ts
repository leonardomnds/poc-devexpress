import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RelatorioService } from 'src/app/services/relatorio.service';

@Component({
  selector: 'app-vinculo-tenant',
  templateUrl: './vinculo-tenant.component.html',
  styleUrls: ['./vinculo-tenant.component.scss']
})
export class VinculoTenantComponent implements OnInit {

  relatorioId: number;
  tenants: any[] = [];
  exibirInputVinculo: boolean = false;
  novaTenant: string = '';

  constructor(private relatorioService: RelatorioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.relatorioId = +this.route.snapshot.paramMap.get('id');
    this.carregarTenants();
  }

  carregarTenants(): void {
    this.relatorioService.getRelatorio(this.relatorioId).subscribe(data => {
      this.tenants = data.data.relatorioTenants;
    });
  }

  vincularNovaTenant(): void {
    this.exibirInputVinculo = true;
  }

  vincular(): void {
    if (this.novaTenant) {
      this.relatorioService.vincularTenantRelatorio(this.relatorioId, this.novaTenant).subscribe(() => {
        this.carregarTenants();
      });
      this.exibirInputVinculo = false;
      this.novaTenant = '';
    }
  }

  voltarVinculo() {
    this.exibirInputVinculo = false;
    this.novaTenant = '';
  }

  selecionarParaDesvinculo(relatorioId: number): void {
    this.relatorioService.desvincularTenantRelatorio(this.relatorioId).subscribe(() => {
      this.carregarTenants();
    });
  }

  voltar(): void {
    this.router.navigate(['/listagem']);
  }
}
