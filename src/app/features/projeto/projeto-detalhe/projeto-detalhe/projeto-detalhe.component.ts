import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projeto-detalhe',
  templateUrl: './projeto-detalhe.component.html',
  styleUrls: ['./projeto-detalhe.component.scss']
})
export class ProjetoDetalheComponent implements OnInit {

  @Input() aoInserirRegistros: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
