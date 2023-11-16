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
  reportUrl: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private relatorioService: RelatorioService
    ) {
    this.form = this.fb.group({
      report: ['']
    });
  }

  ngOnInit(): void {
    this.relatorioService.getRelatorios().subscribe(items => {
      this.reportItems = items;
    });
  }

  abrirPreview() {
    if (this.form.valid) {
      this.reportUrl = this.form.value.report;
    }
  }

  voltar(): void {
    this.router.navigate(['/']);
  }
}
