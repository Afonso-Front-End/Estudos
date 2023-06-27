let pessoa = {
    nome:'Afonso',
    sobrenome:'Silva',
    idade:23,
    social:{
        facebook:'Fonsso',
        whatsapp:{
            url:'http/dadjadhkashdkajs.com',
            seguidores: 1000
        }
    },
  
}

function pegarNomeCompleto({nome, sobrenome = 'santo', social:{whatsapp:{url:whatsapp}}}){
    return `${nome} ${sobrenome} Siga em ${whatsapp}`
}

console.log(pegarNomeCompleto(pessoa))