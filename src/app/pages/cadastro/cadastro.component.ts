import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { RelatorioService } from '../../services/relatorio.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/components/toast.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private relatorioService: RelatorioService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.form = this.fb.group({
      report: [''],
      tituloRelatorio: [''],
    });

    const savedForm = window.localStorage.getItem('devexpress@form');
    if (savedForm) {
      this.form.patchValue(JSON.parse(savedForm));
    }
  }

  criarRelatorio() {
    if (this.form.valid) {
      const { report, tituloRelatorio } = this.form.value;
      this.relatorioService.salvarRelatorio(report, tituloRelatorio)
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
