import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import 'devexpress-reporting/dx-webdocumentviewer';
import { RelatorioService } from '../../services/relatorio.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  host = environment.devexpressUrl;
  endpoint = '/DXXRDV';
  form: FormGroup;
  reportItems: any[];
  reportUrl: string;
  tenants: any[];
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
        .set('id', this.form.value.tenant.toString());

        this.reportUrl = params.toString();
    }
  }

  onReportChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const reportName = selectElement.value;
    const selectedReport = this.reportItems.find(item => item.nome === reportName);

    if (selectedReport) {
      this.tenants = selectedReport.relatorioTenants;
      this.form.controls['tenant'].setValue('');
    } else {
      this.tenants = [];
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
