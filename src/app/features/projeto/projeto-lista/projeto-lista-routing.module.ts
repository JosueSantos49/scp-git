import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetoListaComponent } from './projeto-lista.component';


const routes: Routes = [
  {
    path: '',
    component: ProjetoListaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetoListaRoutingModule { }
