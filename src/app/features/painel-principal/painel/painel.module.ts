import { FormsModule } from '@angular/forms';
import { PainelPrincipalRoutingModule } from './painel-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelPrincipalComponent } from './painel.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
  imports: [
    CommonModule,
    PainelPrincipalRoutingModule,
    FormsModule
  ],
  exports: [PainelPrincipalComponent],
  declarations: [
    PainelPrincipalComponent,
    LoginComponent]
})
export class PainelPrincipalModule { }
