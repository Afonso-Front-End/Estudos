import { Component } from '@angular/core';
import { json } from 'express';
import { Pessoa } from 'src/app/model/Pessoa';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component {
  // Obtj para o formulario
  pessoa = new Pessoa()

  // Vetor
  dados:Pessoa[] = []

  // Inicializacao
  ngOnInit(){
    this.dados = JSON.parse(localStorage.getItem('vetor') || '[]')
  }

  // Metodo de cadastro
  cadastrar():void{
    // Criar um novo obj temporario
    let obj_temp = new Pessoa()

    // Copiar as imformacoes 
    obj_temp = {...this.pessoa}

    // Cadastrar no vetor
    this.dados.push(obj_temp)

    // Atualizar o local

    localStorage.setItem('vetor', JSON.stringify(this.dados))

    this.pessoa = new Pessoa()
  }

  remover(indice:number):void{
    this.dados.splice(indice, 1)

    localStorage.setItem('vetor', JSON.stringify(this.dados))

  }
}
