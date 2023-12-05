import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RelatorioService } from 'src/app/services/relatorio.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-preview-cliente',
  templateUrl: './preview-cliente.component.html',
  styleUrls: ['./preview-cliente.component.scss']
})
export class PreviewClienteComponent implements OnInit {
  host = environment.devexpressUrl;
  endpoint = '/DXXRDV';
  form: FormGroup;
  reportItems: any[];
  reportUrl: string;
  idRelatorio: number;
  selectedTenant: string;
  idTenant: number;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private relatorioService: RelatorioService
    ) {
    this.form = this.fb.group({
      report: [''],
      tenant: ['']
    });
  }

  ngOnInit(): void {
    this.relatorioService.getRelatorios().subscribe(items => {
      this.reportItems = items.data.lista;
    });
  }

  abrirPreview() {
    if (this.form.valid) {
      let params = new HttpParams()
        .set('IsSuporte', 'false')
        .set('id', this.idRelatorio.toString());

        this.reportUrl = params.toString();
    }
  }

  onReportChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const reportName = selectElement.value;
    const selectedReport = this.reportItems.find(item => item.nome === reportName);

    if (selectedReport) {
      this.idRelatorio = selectedReport.relatorioId;
      this.form.controls['tenant'].setValue('');
    } else {
      this.idRelatorio = null;
    }
  }

  selecionarTenant() {
    this.selectedTenant = this.form.value.tenant;
  }

  voltar(): void {
    this.router.navigate(['/']);
  }

  voltarPreview(): void {
    this.reportUrl = null;
  }
}
