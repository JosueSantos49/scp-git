import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetoDetalheComponent } from './features/projeto/projeto-detalhe/projeto-detalhe/projeto-detalhe.component';
import { ProjetoNovoComponent } from './features/projeto/projeto-novo/projeto-novo.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'painel-principal',
  },
  {
    path: 'painel-principal',
    loadChildren: ()=> import('./features/painel-principal/painel/painel.module').then((m)=> m.PainelPrincipalModule),
  },
  {
    path: 'projeto-novo',
    component: ProjetoNovoComponent
  },
  {
    path: 'projeto-detalhe',
    component: ProjetoDetalheComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
