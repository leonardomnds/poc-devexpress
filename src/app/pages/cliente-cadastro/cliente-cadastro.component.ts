import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ToastService } from 'src/app/components/toast.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { GrupoService } from 'src/app/services/grupo.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.scss']
})
export class ClienteCadastroComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.form = this.fb.group({
      nome: [''],
      cpfcnpj: [''],
      tenant: [''],
      tipoPlano: null
    });
  }

  criarCliente() {
    if (this.form.valid) {
      const { nome, cpfcnpj, tenant, tipoPlano } = this.form.value;
      this.clienteService.salvarCliente(nome, cpfcnpj, tenant, tipoPlano)
        .pipe(take(1))
        .subscribe({
          next: () => {
            this.toastService.showSuccess('Cliente salvo com sucesso!');
            this.router.navigate(['/']);
          },
          error: () => {
            this.toastService.showError('Falha ao salvar o cliente!');
          }
        });
    }
  }

  voltar(): void {
    this.router.navigate(['/']);
  }
}
