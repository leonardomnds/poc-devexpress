import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { RelatorioService } from '../../services/relatorio.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/components/toast.service';
import { GrupoService } from 'src/app/services/grupo.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{
  form: FormGroup;

  grupos: any;

  constructor(
    private fb: FormBuilder,
    private relatorioService: RelatorioService,
    private grupoService: GrupoService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.form = this.fb.group({
      report: [''],
      tituloRelatorio: [''],
      tenant: [''],
      grupoRelatorioId: null
    });

    const savedForm = window.localStorage.getItem('devexpress@form');
    if (savedForm) {
      this.form.patchValue(JSON.parse(savedForm));
    }
  }

  ngOnInit(): void {
    this.grupoService.getRelatorios().subscribe(items => {
      this.grupos = items.data;
    });
  }

  criarRelatorio() {
    if (this.form.valid) {
      const { report, tituloRelatorio, tenant, grupoRelatorioId } = this.form.value;
      this.relatorioService.salvarRelatorio(report, tituloRelatorio, tenant, grupoRelatorioId)
        .pipe(take(1))
        .subscribe({
          next: () => {
            this.toastService.showSuccess('Relatório salvo com sucesso!');
            this.router.navigate(['/design']);
          },
          error: () => {
            this.toastService.showError('Falha ao salvar o relatório!');
          }
        });
      this.salvarCampos();
    }
  }

  voltar(): void {
    this.router.navigate(['/']);
  }

  private salvarCampos(): void {
    window.localStorage.setItem('devexpress@form', JSON.stringify(this.form.value));
  }
}
