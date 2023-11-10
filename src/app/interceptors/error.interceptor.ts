import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpStatusCode
} from '@angular/common/http';
import { Observable, catchError, of, switchMap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { ToastService } from '../components/toast.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private toastService: ToastService,
    private authService: AuthenticationService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          switch (error.status) {
            case HttpStatusCode.Unauthorized:
              return this.handleError401(request, error, next);
            default:
              return this.defaultErrorHandler(error);
            }
        }

        return throwError(() => error);
      }));
  }

  private handleError401(request: HttpRequest<any>, response: HttpErrorResponse, next: HttpHandler): Observable<any> {
    const isAuthEndpoint = request.url.includes(this.authService.loginUrl);

    if (isAuthEndpoint || !this.authService.getToken()) {
      return throwError(() => response);
    }

    this.toastService.showError('Sua sessão expirou. Faça login novamente para continuar.');
    this.authService.logout();
    this.router.navigate(['/login']);

    return this.defaultErrorHandler(response);
  }

  private defaultErrorHandler(response: HttpErrorResponse): Observable<never> {
    this.toastService.showError('Ocorreu um erro inesperado.');
    return throwError(() => response);
  }
}
