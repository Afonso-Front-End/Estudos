import { Component } from '@angular/core';
import { Postagem } from 'src/app/model/Postagem';
import { PostagemsService } from 'src/app/requisioes/postagems.service';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.css']
})
export class Page6Component {
  // Vetor
  vetor:Postagem [] = []

  // Mensagem de falha
  msgFalha:boolean = false


  // COntrutor
  constructor(private requisicao:PostagemsService){}

  // Inicializarz
  ngOnInit(){
    this.obterPostagems()
  }
  // Obter todas as postagems
  obterPostagems():void{
    this.requisicao.listar().subscribe({
      next: retorno => {this.vetor = retorno},
      error: retorno => {this.msgFalha = true}})
  }
}
