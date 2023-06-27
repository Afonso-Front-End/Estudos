let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kl',
    ligado: true,
    ligar:function(){
        this.ligado = true
        console.log('VRUMM VRUMM')
    },
    acelerar:function(){
        if(this.ligado == true){
            console.log('Riiiirhhihh')
        }else{
            console.log(this.nome+''+this.modelo+' Não esta ligado ')

        }
    }

}

console.log('modelo:'+carro.modelo)
carro.acelerar()

let carros = [
    {nome: 'Fiat',modelo: 'Uno'},
    {nome: 'Disclan',modelo: 'Jubirau'},
    {nome: 'Pio Pio',modelo: 'Lata velha'},
]
console.log()