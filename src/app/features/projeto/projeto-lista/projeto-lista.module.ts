import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoListaRoutingModule } from './projeto-lista-routing.module';
import { ProjetoListaComponent } from './projeto-lista.component';
import { ProjetoService } from 'src/app/services/projeto.service';


@NgModule({
  declarations: [ProjetoListaComponent],
  imports: [
    CommonModule,
    ProjetoListaRoutingModule
  ],
  providers: [ ProjetoService ]
})
export class ProjetoListaModule { }
