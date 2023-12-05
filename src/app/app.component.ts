import { Component, ViewEncapsulation } from '@angular/core';
import 'devexpress-reporting/dx-richedit';

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
export class AppComponent {}
