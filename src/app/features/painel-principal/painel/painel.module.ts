import { MensagemModule } from './../../componentes/mensagem/mensagem.module';
import { FormsModule } from '@angular/forms';
import { PainelRoutingModule } from './painel-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
  imports: [
    CommonModule,
    PainelRoutingModule,
    FormsModule,
    MensagemModule
  ],
  exports: [PainelComponent],
  declarations: [
    PainelComponent,
    LoginComponent]
})
export class PainelModule { }
