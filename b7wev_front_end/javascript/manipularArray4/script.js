let lista = [
    {id:1, nome:'Afonso', sobrenome:'ilv'},
    {id:2, nome:'Afon', sobrenome:'slva'},
    {id:3, nome:'fonso', sobrenome:'slva'},
    {id:4, nome:'Afo', sobrenome:'lva'}
]
let pessoa = lista.find(function(item){
    return(item.id == 2)? true : false
})
let pessoa2 = lista.findIndex(function(item){
    return(item.id == 2)? true : false
})

let res2 = pessoa2
console.log(res2)
let res = pessoa
console.log(res)