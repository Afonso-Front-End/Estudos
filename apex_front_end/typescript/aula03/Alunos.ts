import { Padrao } from "./Padrao";

export class Aluno implements Padrao{
    // Atributos
    nome: string;
    nota1: number;
    nota2: number;

    // Construtor
    constructor(nome:string, nota1:number, nota2:number){
        this.nome = nome
        this.nota1 = nota1
        this.nota2 = nota2

        this.mensagem()
    }

    // Metodo media
    private media():number{
        return (this.nota1 + this.nota2) /2
    }

    // Metodo de situação
    private situacao ():string{
        return this.media() >= 7 ? 'Aprovado' : 'Reprovado'
    }

    // Metodo de mensagem
    private mensagem():void{
        // Realizar media
        let media = this.media()

        // Realizar media
        let situacao = this.situacao()

        // Exibir mensagem
        console.log(`${situacao} com media ${media}`)
    }
}

