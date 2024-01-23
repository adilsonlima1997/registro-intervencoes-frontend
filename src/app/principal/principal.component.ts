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
  //variavel para visibilidade da tabela
  tabela:boolean = true;
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

  selecionarAvaria(posicao:number):void{
    //selecionar cliente no vetor
    this.avaria = this.avarias[posicao];
    //visibilidade dos botoes
    this.btnCadastro = false;
    //visibilidade da tabela
    this.tabela = false;

  }
  //Método de inicialização
  ngOnInit(){
    this.selecionar();
  }
}
