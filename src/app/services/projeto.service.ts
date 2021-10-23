import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
  private listaProjeto: any[];

  constructor() {
    this.listaProjeto = [];
  }

  get projeto(){
    return this.listaProjeto;
  }

  novo(projeto: any){
    this.hidratar(projeto);
    this.listaProjeto.push(projeto);
  }

  //recursos adicionais
  private hidratar(projeto: any){
    projeto.data = new Date();
  }

}
