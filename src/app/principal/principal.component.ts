import { Component } from '@angular/core';
import { Avaria } from '../modelo/Avaria';
import { AvariaService } from '../servico/avaria.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  //Objecto do tipo Avaria
  avaria = new Avaria;

  // variavel para visibilidade dos botões
  btnCadastro:boolean = true;
  //JSON de avarias
  avarias:Avaria[] = [];

  constructor(private servico:AvariaService){}
  //Método de seleção
  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.avarias = retorno);
  }
  //Método de cadastro
  cadastrar():void{
    this.servico.cadastrar(this.avaria)
    .subscribe(retorno => {
      //cadastrar a avaria no vetor
      this.avarias.push(retorno);
      //limpar formulario
      this.avaria = new Avaria();
      //mensagem
      alert('Avaria cadastrada com sucesso!');
    });
  }
  //Método de inicialização
  ngOnInit(){
    this.selecionar();
  }
}
