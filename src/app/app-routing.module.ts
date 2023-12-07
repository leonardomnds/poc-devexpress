import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { DesignComponent } from './pages/design/design.component';
import { PreviewComponent } from './pages/preview/preview.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard, ClienteGuard, SuporteGuard } from './guards';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { VinculoTenantComponent } from './pages/vinculo-tenant/vinculo-tenant.component';
import { GrupoCadastroComponent } from './pages/grupo-cadastro/grupo-cadastro.component';
import { PreviewClienteComponent } from './pages/preview-cliente/preview-cliente.component';
import { ClienteCadastroComponent } from './pages/cliente-cadastro/cliente-cadastro.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  { path: 'cadastro', component: CadastroComponent, canActivate: [AuthGuard, SuporteGuard]},
  { path: 'grupo-cadastro', component: GrupoCadastroComponent, canActivate: [AuthGuard, SuporteGuard]},
  { path: 'cliente-cadastro', component: ClienteCadastroComponent, canActivate: [AuthGuard, SuporteGuard]},
  { path: 'design', component: DesignComponent, canActivate: [AuthGuard, SuporteGuard]},
  { path: 'preview', component: PreviewComponent, canActivate: [AuthGuard, SuporteGuard]},
  { path: 'preview-cliente', component: PreviewClienteComponent, canActivate: [AuthGuard, ClienteGuard]},
  { path: 'listagem', component: ListagemComponent, canActivate: [AuthGuard, SuporteGuard]},
  { path: 'vinculo-tenant/:id', component: VinculoTenantComponent, canActivate: [AuthGuard, SuporteGuard]},
  { path: '**', component: HomeComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
