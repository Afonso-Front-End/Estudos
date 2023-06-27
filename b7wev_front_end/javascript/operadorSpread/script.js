/*
let numeros = [1,2,3,4]

let outros = [...numeros,5,6,7,8]

console.log(outros)
*/

function adicionarInfo(info){
    let novaInfo = {
        ...info,
        status:0,
        token: 'ffksdlk',
        data_cadatros:'768'
    }
    return novaInfo;

}
console.log(adicionarInfo({nome:'Afonso',sobreNome:'Silva'}))