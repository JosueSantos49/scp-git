import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PainelPrincipalModule } from './features/painel-principal/painel/painel.module';
import { ProjetoDetalheComponent } from './features/projeto/projeto-detalhe/projeto-detalhe/projeto-detalhe.component';
import { ProjetoNovoComponent } from './features/projeto/projeto-novo/projeto-novo.component';
import { ProjetoPesquisaComponent } from './features/projeto/projeto-pesquisa/projeto-pesquisa.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    ProjetoNovoComponent,
    ProjetoDetalheComponent,
    ProjetoPesquisaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PainelPrincipalModule
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
