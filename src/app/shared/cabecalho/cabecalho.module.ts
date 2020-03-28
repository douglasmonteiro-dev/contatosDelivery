import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    CabecalhoComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
  ],
  exports: [CabecalhoComponent]
})
export class CabecalhoModule { }
