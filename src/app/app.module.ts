import { ProjetoNovoComponent } from './features/projeto/projeto-novo/projeto-novo.component';
import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProjetoDetalheComponent } from './features/projeto/projeto-detalhe/projeto-detalhe/projeto-detalhe.component';
import { ProjetoPesquisaComponent } from './features/projeto/projeto-pesquisa/projeto-pesquisa.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

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
  providers: [
    {provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
