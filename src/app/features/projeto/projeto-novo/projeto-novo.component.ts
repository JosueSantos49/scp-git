import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-projeto-novo',
  templateUrl: './projeto-novo.component.html',
  styleUrls: ['./projeto-novo.component.scss']
})
export class ProjetoNovoComponent {

  @Output() aoInserir = new EventEmitter<any>();
  //@Output() valoresComErro = new EventEmitter<String>();

  nome: String;

  inserir(){
    console.log('Inserir novo projeto: '+this.nome);
    const valorEmitir = {nome: this.nome};
    this.aoInserir.emit(valorEmitir);
  }

  limparCampos(){
    //this.nome = 0;
  }
}
