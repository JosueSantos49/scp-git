import { ProjetoService } from './services/projeto.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SCP-FRONTEND';

  constructor(private service: ProjetoService) {}

  inserir($event){
    this.service.novo($event);//recebe o evento e propaga para o service
  }
}
