import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import 'devexpress-reporting/dx-richedit';
import { RelatorioService } from './services/relatorio.service';
import { take } from 'rxjs';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    '../../node_modules/devextreme/dist/css/dx.light.css',
    '../../node_modules/devexpress-richedit/dist/dx.richedit.css',
    '../../node_modules/devexpress-reporting/dist/css/dx-reportdesigner.css',
    '../../node_modules/devexpress-reporting/dist/css/dx-webdocumentviewer.css',
    '../../node_modules/@devexpress/analytics-core/dist/css/dx-querybuilder.css',
    '../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.light.css',
    '../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.common.css',
  ]
})
export class AppComponent {
  host = 'https://localhost:7086';
  endpoint = '/DXXRDV';

  Tela = Tela;
  private _telaAtual = Tela.Preview;

  form: FormGroup;
  reportNameForPreview: string;
  reportNameForDesigner: string;

  constructor(
    private fb: FormBuilder,
    private relatorioService: RelatorioService,
    private localStorageService: LocalStorageService
  ) {
    this.form = this.fb.group({ report: [''], sql: [''], tituloRelatorio: [''] });
    const savedForm = this.localStorageService.get('form');
    if (savedForm) { this.form.patchValue(JSON.parse(savedForm)); }
  }

  get telaAtual() {
    return this._telaAtual;
  }

  set telaAtual(tela: Tela) {
    this._telaAtual = tela;
    this.reportNameForPreview = this.reportNameForDesigner = '';
  }

  criarRelatorio() {
    const { report, sql, tituloRelatorio } = this.form.value;
    console.log(this.form.value);
    this.relatorioService
      .salvarRelatorio(report, tituloRelatorio)
      .pipe(take(1))
      .subscribe(() => {
        this.telaAtual = Tela.Designer;
        this.abrirPreview();
      });
  }

  abrirPreview() {
    this.salvarCampos();
    this.telaAtual = Tela.Preview;
    this.reportNameForPreview = this.form.value.report;
  }

  abrirDesigner() {
    this.salvarCampos();
    this.reportNameForDesigner = this.form.value.report;
  }

  private salvarCampos(): void {
    this.localStorageService.set('form', this.form.value);
  }
}

enum Tela {
  Principal = 'principal',
  Cadastro = 'cadastro',
  Designer = 'designer',
  Preview = 'preview',
}
