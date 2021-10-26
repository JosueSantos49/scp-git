import { Projeto } from './../../../models/projeto.models';
import { ProjetoService } from './../../../services/projeto.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projeto-novo',
  templateUrl: './projeto-novo.component.html',
  styleUrls: ['./projeto-novo.component.scss']
})
export class ProjetoNovoComponent {

  @Output() aoInserir = new EventEmitter<any>();

  nome: number;

  constructor(private service: ProjetoService, private router: Router) {}

  inserir(){
    console.log('Inserir novo projeto: '+this.nome);

    const valorEmitir: Projeto = { nome: this.nome };

      this.service.novo(valorEmitir).subscribe(resultado => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('projeto-detalhe');
      },
      (error) => console.error(error)
    );
  }

  limparCampos(){
    this.nome = 0;
  }
}
