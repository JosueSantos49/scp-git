import { ProjetoDetalheComponent } from './features/projeto/projeto-detalhe/projeto-detalhe/projeto-detalhe.component';
import { ProjetoNovoComponent } from './features/projeto/projeto-novo/projeto-novo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'projeto-detalhe', pathMatch: 'full'},
  { path: 'projeto-novo', component: ProjetoNovoComponent },
  { path: 'projeto-detalhe', component: ProjetoDetalheComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
