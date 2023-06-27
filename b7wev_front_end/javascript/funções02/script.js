//usar função
function somar(x,y){
    let total = x+y
    document.getElementById('campo').value = total
}
//
//retorno
function somar(x,y){
    let total = x + y
    return total
}
var resultado = somar(10,15)
console.log(resultado)
//