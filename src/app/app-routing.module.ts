import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { Page404Component } from './pages/page404/page404.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { AbrirAgendaComponent } from './pages/abrir-agenda/abrir-agenda.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { RegisterComponent } from './pages/register/register.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { DadosClienteComponent } from './pages/dados-cliente/dados-cliente.component';
import { EstabelecimentoComponent } from './pages/estabelecimento/estabelecimento.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'forgot-password/:token', component: ForgotPasswordComponent},
  {path: 'servicos', component: ServicosComponent},
  {path: 'cliente', component: DadosClienteComponent},
  {path: 'estabelecimentos', component: EstabelecimentoComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'agendamento', component: AgendamentoComponent},
  {path: 'abrir-agenda', component: AbrirAgendaComponent},
  {path: 'agenda', component: AgendaComponent},
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: '**', component: Page404Component }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
