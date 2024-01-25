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

  //Metodo para editar avarias
  editar():void{
    this.servico.editar(this.avaria)
    .subscribe(retorno => {
      //obter posicao do vetor onde está há avaria
      let posicao = this.avarias.findIndex(obj => {
        return obj.numero_quarto == retorno.numero_quarto;
      });

      //alterar os dados da avaria no vetor
      this.avarias[posicao] = retorno;
      //limpar formulario
      this.avaria = new Avaria();
      //visibilidade dos botoes
      this.btnCadastro = true;
      //visibilidade da tabeela
      this.tabela = true;
      //mensagem
      alert('Avaria alterado com sucesso!'); 
    });
  }
  //Método de inicialização
  ngOnInit(){
    this.selecionar();
  }
}
