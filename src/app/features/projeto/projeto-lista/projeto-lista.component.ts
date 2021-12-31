
import { Component, OnInit } from '@angular/core';
import { ProjetoService } from './../../../services/projeto.service';

@Component({
  selector: 'app-projeto-lista',
  templateUrl: './projeto-lista.component.html',
  styleUrls: ['./projeto-lista.component.scss']
})
export class ProjetoListaComponent implements OnInit {

  projetos: string[];

  constructor(public projetoService: ProjetoService) {

    this.projetos = this.projetoService.getProjetos();

   }

  ngOnInit(): void {
  }



}
