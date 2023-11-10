import { Component, OnInit } from '@angular/core';
import { ToastService, ToastMessage } from '../toast.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toast',
  template: `
    <div *ngFor="let toast of toasts | async" class="toast" [class.success]="toast.type === 'success'" [class.error]="toast.type === 'error'">
      {{ toast.message }}
    </div>
  `,
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  toasts: Observable<ToastMessage[]>;

  constructor(private toastService: ToastService) {
    this.toasts = this.toastService.toastMessages$;
  }

  ngOnInit(): void {
  }
}
