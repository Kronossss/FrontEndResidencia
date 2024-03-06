import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { DetalhamentoComponent } from './detalhamento/detalhamento.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent, canActivate: [AuthGuard] },
  { path: 'listagem', component: ListagemComponent, canActivate: [AuthGuard] },
  { path: 'edicao/:id', component: EdicaoComponent, canActivate: [AuthGuard] },
  { path: 'detalhamento/:id', component: DetalhamentoComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
