let lista = [45,4,9,16,25]
let lista2 =[]
/*
let lista2 =[]
lista2 = lista.map(function(item){
    return item * 2
})
*/

lista2 =lista.filter(function(item){//some//every
    return (item > 20)? true : false
})
let res = lista2

console.log(res)