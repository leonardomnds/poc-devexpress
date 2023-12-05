import { Component, ViewEncapsulation } from '@angular/core';
import 'devexpress-reporting/dx-richedit';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    '../../../../node_modules/devextreme/dist/css/dx.light.css',
    '../../../../node_modules/devexpress-richedit/dist/dx.richedit.css',
    '../../../../node_modules/devexpress-reporting/dist/css/dx-reportdesigner.css',
    '../../../../node_modules/devexpress-reporting/dist/css/dx-webdocumentviewer.css',
    '../../../../node_modules/@devexpress/analytics-core/dist/css/dx-querybuilder.css',
    '../../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.light.css',
    '../../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.common.css',
  ]
})
export class HomeComponent {
  constructor(public authService: AuthenticationService) {}
}

