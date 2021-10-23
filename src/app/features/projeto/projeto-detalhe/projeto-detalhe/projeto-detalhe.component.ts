import { ProjetoService } from './../../../../services/projeto.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projeto-detalhe',
  templateUrl: './projeto-detalhe.component.html',
  styleUrls: ['./projeto-detalhe.component.scss']
})
export class ProjetoDetalheComponent implements OnInit {

  @Input() aoInserirRegistros: any[];

  constructor(private service: ProjetoService) { }

  ngOnInit(): void {
     this.aoInserirRegistros = this.service.projeto;
  }

}
