import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxReportDesignerModule, DxReportViewerModule } from 'devexpress-reporting-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PreviewComponent } from './pages/preview/preview.component';
import { DesignComponent } from './pages/design/design.component';
import { ToastComponent } from './components/toast/toast.component';
import { LoginComponent } from './pages/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { VinculoTenantComponent } from './pages/vinculo-tenant/vinculo-tenant.component';
import { environment } from 'src/environments/environment';
import { GrupoCadastroComponent } from './pages/grupo-cadastro/grupo-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    PreviewComponent,
    DesignComponent,
    ToastComponent,
    LoginComponent,
    ListagemComponent,
    VinculoTenantComponent,
    GrupoCadastroComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DxReportDesignerModule,
    DxReportViewerModule,
    JwtModule.forRoot({
      config: {
        headerName: 'Authorization',
        authScheme: 'Bearer ',
        tokenGetter: getAuthToken,
        allowedDomains: [environment.domain]
      }
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
})
export class AppModule { }

function getAuthToken() {
  const token = localStorage.getItem('devexpress@token') ?? 'null';
  return JSON.parse(token);
}
