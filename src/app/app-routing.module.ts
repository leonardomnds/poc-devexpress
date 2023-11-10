import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { DesignComponent } from './pages/design/design.component';
import { PreviewComponent } from './pages/preview/preview.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  { path: 'cadastro', component: CadastroComponent, canActivate: [AuthGuard]},
  { path: 'design', component: DesignComponent, canActivate: [AuthGuard]},
  { path: 'preview', component: PreviewComponent, canActivate: [AuthGuard]},
  { path: '**', component: HomeComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
