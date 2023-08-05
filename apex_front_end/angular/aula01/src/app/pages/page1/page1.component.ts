import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  // Variavel de texto
  texto:string = 'Aprendendo angular';

  // Criar um objeto
  obj:any = {'nome':'Afonso', 'ciddade': 'blumenau', 'idade': 24}

  // Inicialização
  ngOnInit(){
    // alert('Bem vindo ao Angular')
  }

  // Função de mensagem
  mensagem():void{
    alert('Hello word')
  }
}
