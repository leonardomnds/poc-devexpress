import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs';
import { ToastService } from 'src/app/components/toast.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastService: ToastService,
    private authService: AuthenticationService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    })
  }

  login() {
    this.isLoading = true;
    const { email, senha } = this.form.value;

    this.authService.login(email, senha)
      .pipe(take(1), finalize(() => this.isLoading = false))
      .subscribe({
        next: () => this.router.navigate(['/home']),
        error: () => this.toastService.showError('Credenciais inválidas')
      });
  }

}
