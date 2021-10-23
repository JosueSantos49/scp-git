import { ProjetoNovoComponent } from './features/projeto/projeto-novo/projeto-novo.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProjetoDetalheComponent } from './features/projeto/projeto-detalhe/projeto-detalhe/projeto-detalhe.component';
import { ProjetoPesquisaComponent } from './features/projeto/projeto-pesquisa/projeto-pesquisa.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetoNovoComponent,
    ProjetoDetalheComponent,
    ProjetoPesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
