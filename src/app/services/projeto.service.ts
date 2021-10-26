import { Projeto } from './../models/projeto.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
  private listaProjeto: any[];
  private url = 'http://localhost:3000/projetos';

  constructor(private httpClient: HttpClient ) {
    this.listaProjeto = [];
  }

  get projeto(){
    return this.listaProjeto;
  }

  todas(): Observable<Projeto[]>{
    return this.httpClient.get<Projeto[]>(this.url);
  }

  novo(projeto: Projeto): Observable<Projeto>{
    this.hidratar(projeto);

    return this.httpClient.post<Projeto>(this.url, projeto);
  }

  //recursos adicionais
  private hidratar(projeto: any){
    projeto.data = new Date();
  }

}
