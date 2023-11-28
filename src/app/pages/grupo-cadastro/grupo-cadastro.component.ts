import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ToastService } from 'src/app/components/toast.service';
import { GrupoService } from 'src/app/services/grupo.service';

@Component({
  selector: 'app-grupo-cadastro',
  templateUrl: './grupo-cadastro.component.html',
  styleUrls: ['./grupo-cadastro.component.scss']
})
export class GrupoCadastroComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private grupoService: GrupoService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.form = this.fb.group({
      descricao: [''],
    });
  }

  criarRelatorio() {
    if (this.form.valid) {
      const { descricao } = this.form.value;
      this.grupoService.salvarGrupo(descricao)
        .pipe(take(1))
        .subscribe({
          next: () => {
            this.toastService.showSuccess('Grupo salvo com sucesso!');
            this.router.navigate(['/']);
          },
          error: () => {
            this.toastService.showError('Falha ao salvar o grupo!');
          }
        });
    }
  }

  voltar(): void {
    this.router.navigate(['/']);
  }
}
