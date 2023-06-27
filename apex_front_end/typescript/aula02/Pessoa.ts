export class Pessoa{
    // Atributos
    private nome:string
    private idade:number
    private trabalho:boolean

    // Construtor
    constructor(nome:string, idade:number , trabalho:boolean){
        this.nome = nome
        this.idade = idade
        this.trabalho = trabalho

        this.mensagem()
    }

    // Método Função
    private mensagem() {
        console.log(`O nome informador é ${this.nome}`)
        console.log(`A idade informada ${this.idade}`)
        console.log(`${this.trabalho == true ? 'Esta trabalhando' : 'Não esta trabalhando'}`)
    }

}