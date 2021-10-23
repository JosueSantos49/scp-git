import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SCP-FRONTEND';
  aoInserirRegistros: any[] = [];

  inserir($event){
    console.log($event)
    this.aoInserirRegistros.push($event);
  }
}
