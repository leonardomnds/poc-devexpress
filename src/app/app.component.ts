import { Component, ViewEncapsulation } from '@angular/core';
import 'devexpress-reporting/dx-richedit';
import { fetchSetup } from '@devexpress/analytics-core/analytics-utils';
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

  constructor(private localStorageService: LocalStorageService) {
    this.addAuthToDevexpress();
  }

  private addAuthToDevexpress(): void {
    const token = this.localStorageService.get('token');

    if (!token) { return; }
    fetchSetup.fetchSettings = { headers: { Authorization: `Bearer ${token}` } };
  }
}
