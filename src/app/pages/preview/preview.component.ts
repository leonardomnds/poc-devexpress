import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import 'devexpress-reporting/dx-webdocumentviewer';
import { RelatorioService } from '../../services/relatorio.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  host = environment.devexpress;
  endpoint = '/DXXRDV';
  form: FormGroup;
  reportItems: any[];
  reportUrl: number;
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
      this.reportUrl = this.form.value.tenant;
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
    console.log(this.selectedTenant);
  }

  voltar(): void {
    this.router.navigate(['/']);
  }

  voltarPreview(): void {
    this.reportUrl = null;
  }
}
