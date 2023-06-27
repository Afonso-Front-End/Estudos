let vetor = [
    {'codigo': '1', 'nome': 'Blusa Xadrez', 'valor': 'US$50', 'imagen': 'img/feminino/1.jpg', 'categoria':'feminino' },
    {'codigo': '2', 'nome': 'Blusa Casual', 'valor': 'US$150', 'imagen': 'img/feminino/2.jpg' ,'categoria':'feminino' },
    {'codigo': '3', 'nome': 'Blusa Social', 'valor': 'US$350', 'imagen': 'img/feminino/3.jpg'  ,'categoria':'feminino'},
    {'codigo': '4', 'nome': 'Blusa bege', 'valor': 'US$180', 'imagen': 'img/feminino/4.jpg' ,'categoria':'feminino' },
    {'codigo': '5', 'nome': 'Blusa estampada', 'valor': 'US$270', 'imagen': 'img/feminino/5.jpg' ,'categoria':'feminino' },
    {'codigo': '6', 'nome': 'Blusa de malha', 'valor': 'US$80', 'imagen': 'img/feminino/6.jpg' ,'categoria':'feminino' },
    {'codigo': '7', 'nome': 'Camisa do unicornio', 'valor': 'US$100', 'imagen': 'img/infantil/1.jpg' ,'categoria':'infantil' },
    {'codigo': '8', 'nome': 'Camisa do super sonic', 'valor': 'US$30', 'imagen': 'img/infantil/2.jpg' ,'categoria':'infantil' },
    {'codigo': '9', 'nome': 'Vestido vermelho infantil', 'valor': 'US$60', 'imagen': 'img/infantil/3.jpg'  ,'categoria':'infantil'},
    {'codigo': '10', 'nome': 'Camisa do dironosauro', 'valor': 'US$200', 'imagen': 'img/infantil/4.jpg' ,'categoria':'infantil' },
    {'codigo': '11', 'nome': 'Casaco da minie', 'valor': 'US$130', 'imagen': 'img/infantil/5.jpg'  ,'categoria':'infantil'},
    {'codigo': '13', 'nome': 'Casaco', 'valor': 'US$10', 'imagen': 'img/masculino/1.jpg'  ,'categoria':'masculino'},
    {'codigo': '14', 'nome': 'Casaco preto', 'valor': 'US$10', 'imagen': 'img/masculino/2.jpg'  ,'categoria':'masculino'},
    {'codigo': '15', 'nome': 'Casaco do morie', 'valor': 'US$10', 'imagen': 'img/masculino/3.jpg'  ,'categoria':'masculino'},
    {'codigo': '16', 'nome': 'VCamisa preta', 'valor': 'US$10', 'imagen': 'img/masculino/4.jpg'  ,'categoria':'masculino'},
    {'codigo': '17', 'nome': 'Camisa branca aberta', 'valor': 'US$10', 'imagen': 'img/masculino/5.jpg'  ,'categoria':'masculino'},
    {'codigo': '18', 'nome': 'Camisa berge', 'valor': 'US$10', 'imagen': 'img/masculino/6.jpg' ,'categoria':'masculino' },
]

let carrinho = []
// Listagem 

let listagem = (opcao) => {
    let produtos = document.getElementById('produtos')
    produtos.innerHTML = ''
    for (let index = 0; index < vetor.length; index++) {
        if(opcao == vetor[index].categoria || opcao == 'todos'){

        let coluna = document.createElement('div')
        coluna.classList.add('col-3')
        let imagem = document.createElement('img')
        imagem.src = vetor[index].imagen
        imagem.classList.add('img-fluid')
        let nomeProduto = document.createElement('p')
        nomeProduto.innerText = vetor[index].nome
        let valorProduto = document.createElement('p')
        valorProduto.innerText = vetor[index].valor
        let button = document.createElement('button')
        button.innerText = 'Adicionar'
        button.addEventListener('click', () => {
            adicionar(vetor[index].codigo)
        })
        button.classList.add('btn', 'btn-primary')

        
        coluna.appendChild(imagem)
        coluna.appendChild(nomeProduto)
        coluna.appendChild(valorProduto)
        coluna.appendChild(button)
        produtos.appendChild(coluna)
        }
    }
}

let adicionar = (codigo) => {
    // veirificar se o codigo existe no carrinho de compra
    let index = carrinho.findIndex(obj => {return obj.codigo == codigo})

    if(index == -1){
        let obj = {'codigo':codigo, 'quantidade' :1}
        carrinho.push(obj)
    }else{
       let obj = carrinho[index]
       obj.quantidade += 1
       carrinho[index] = obj
    }
    
    itemSelecionados()
    
}


let itemSelecionados = () => {
    
    let exibirCariinho = document.getElementById('exibirCarrinho')
    exibirCariinho.innerHTML = ''
    
    for (let index = 0; index < carrinho.length; index++) {
        let produtos = retonarProduto(carrinho[index].codigo)

        console.log(produtos)

        let coluna = document.createElement('div')
        coluna.classList.add('col-6')

        let imagem = document.createElement('img')
        imagem.src = produtos.imagen
        imagem.classList.add('img-fluid')
        
        let nomeproduto = document.createElement('p')
        nomeproduto.innerText = produtos.nome

        let valorProduto = document.createElement('p')
        valorProduto.innerText = produtos.valor

        let quantidadeProduto = document.createElement('p')
        quantidadeProduto.innerText =  carrinho[index].quantidade

        coluna.appendChild(imagem)
        coluna.appendChild(nomeproduto)
        coluna.appendChild(valorProduto)
        coluna.appendChild(quantidadeProduto)
        exibirCariinho.appendChild(coluna)
    }

}

let retonarProduto = (codigo) => {
    let index = vetor.findIndex(obj => {
        return obj.codigo == codigo
    })

    return vetor[index]
}


let pesquisar = () => {

    let termo = document.getElementById('termo').value

    let produtos = document.getElementById('produtos')
    produtos.innerHTML = ''
    for (let index = 0; index < vetor.length; index++) {
        if(vetor[index].nome.toLocaleLowerCase().indexOf(termo.toLocaleLowerCase()) != -1){

        let coluna = document.createElement('div')
        coluna.classList.add('col-3')
        let imagem = document.createElement('img')
        imagem.src = vetor[index].imagen
        imagem.classList.add('img-fluid')
        let nomeProduto = document.createElement('p')
        nomeProduto.innerText = vetor[index].nome
        let valorProduto = document.createElement('p')
        valorProduto.innerText = vetor[index].valor
        let button = document.createElement('button')
        button.innerText = 'Adicionar'
        button.addEventListener('click', () => {
            adicionar(vetor[index].codigo)
        })
        button.classList.add('btn', 'btn-primary')

        
        coluna.appendChild(imagem)
        coluna.appendChild(nomeProduto)
        coluna.appendChild(valorProduto)
        coluna.appendChild(button)
        produtos.appendChild(coluna)
        }
    }
}