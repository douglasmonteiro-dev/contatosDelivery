import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import { HomeComponent } from './home/home.component';
import { SolicitaRetiradaComponent } from './solicita-retirada/solicita-retirada.component';
import { StatusComponent } from './status/status.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { AcessoRemotoComponent } from './acesso-remoto/acesso-remoto.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { MatButtonModule } from '@angular/material/button';
import { FiltraPorNomePipe } from '../shared/pipes/filtra-por-nome.pipe';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    HomeComponent, 
    SolicitaRetiradaComponent, 
    StatusComponent, 
    OrcamentoComponent, 
    AcessoRemotoComponent, 
    PagamentoComponent,
    FiltraPorNomePipe
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSortModule,
    MatIconModule,
  ]
})
export class PagesModule { }
