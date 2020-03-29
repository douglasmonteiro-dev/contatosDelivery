import { AgmCoreModule } from '@agm/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbModalModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarCommonModule, CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { FiltraPorNomePipe } from '../shared/pipes/filtra-por-nome.pipe';
import { AcessoRemotoComponent } from './acesso-remoto/acesso-remoto.component';
import { HomeComponent } from './home/home.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { SolicitaRetiradaComponent } from './solicita-retirada/solicita-retirada.component';
import { StatusComponent } from './status/status.component';
import { MenuModule } from '../shared/menu/menu.module';
import ptBr from '@angular/common/locales/pt';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ServicosComponent } from './servicos/servicos.component';
import { AbrirAgendaComponent } from './abrir-agenda/abrir-agenda.component';
import { RouterModule } from '@angular/router';
import { DadosClienteComponent } from './dados-cliente/dados-cliente.component';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';

registerLocaleData(ptBr);



@NgModule({
  declarations: [
    HomeComponent, 
    SolicitaRetiradaComponent, 
    StatusComponent, 
    OrcamentoComponent, 
    AcessoRemotoComponent, 
    PagamentoComponent,
    FiltraPorNomePipe,
    AgendamentoComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    AgendaComponent,
    ServicosComponent,
    AbrirAgendaComponent,
    DadosClienteComponent,
    EstabelecimentoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgbModalModule,
    NgbTypeaheadModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatNativeDateModule,
    MatStepperModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarCommonModule,
    CalendarModule,
    NgxMaterialTimepickerModule,
    FlatpickrModule.forRoot({locale: ptBr}),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDfPbNnfE5ktwmYBMuI_S7jH04khiAQomM'})
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }, MatDatepickerModule],
  entryComponents: []
})
export class PagesModule { }
