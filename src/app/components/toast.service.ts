import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ToastMessage {
  type: 'success' | 'error';
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toasts: ToastMessage[] = [];
  private toastsSubject = new BehaviorSubject<ToastMessage[]>(this.toasts);

  toastMessages$ = this.toastsSubject.asObservable();

  constructor() { }

  showSuccess(message: string) {
    this.addToast({ type: 'success', message });
  }

  showError(message: string) {
    this.addToast({ type: 'error', message });
  }

  private addToast(toast: ToastMessage) {
    this.toasts.push(toast);
    this.toastsSubject.next(this.toasts);
    
    setTimeout(() => this.removeToast(toast), 3000);
  }

  private removeToast(toast: ToastMessage) {
    this.toasts = this.toasts.filter(t => t !== toast);
    this.toastsSubject.next(this.toasts);
  }
}
