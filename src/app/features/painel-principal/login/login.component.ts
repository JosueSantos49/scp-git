import { Router } from '@angular/router';
import { AutenticacaoService } from './../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  login(){
    this.autenticacaoService.autentica(this.usuario, this.senha).subscribe(() => {

      this.router.navigate(['projeto-lista'])

    },(error) => {
      alert('Usuário ou senha inválido!');
      console.log(console.error);
      }
    );
  }

}
