import { Projeto } from './../../../../models/projeto.models';
import { ProjetoService } from './../../../../services/projeto.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projeto-detalhe',
  templateUrl: './projeto-detalhe.component.html',
  styleUrls: ['./projeto-detalhe.component.scss']
})
export class ProjetoDetalheComponent implements OnInit {

  projetos: any[];

  constructor(private service: ProjetoService) { }

  ngOnInit(): void {
     this.service.todas().subscribe((projetos: Projeto[]) =>{
       console.table(projetos);
       this.projetos = projetos;
     });
  }

}
