import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { DesignComponent } from './pages/design/design.component';
import { PreviewComponent } from './pages/preview/preview.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { VinculoTenantComponent } from './pages/vinculo-tenant/vinculo-tenant.component';
import { GrupoCadastroComponent } from './pages/grupo-cadastro/grupo-cadastro.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  { path: 'cadastro', component: CadastroComponent, canActivate: [AuthGuard]},
  { path: 'grupo-cadastro', component: GrupoCadastroComponent, canActivate: [AuthGuard]},
  { path: 'design', component: DesignComponent, canActivate: [AuthGuard]},
  { path: 'preview', component: PreviewComponent, canActivate: [AuthGuard]},
  { path: 'listagem', component: ListagemComponent, canActivate: [AuthGuard]},
  { path: 'vinculo-tenant/:id', component: VinculoTenantComponent, canActivate: [AuthGuard]},
  { path: '**', component: HomeComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
