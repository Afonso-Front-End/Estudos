var vetor = []

var posicaoVetor = 0

function cadastrar(){
    
    // Obter dados
    var produto = document.getElementById("produto").value
    var marca = document.getElementById("marca").value
    var valor = document.getElementById("valor").value

    // Validar campos
    if(produto == ""){
        alert("Informe um produto")
    }else if(marca == ""){
        alert("Informe uma marca")
    }else if(valor == ""){
        alert("Informe um valor")
    }else{

        // Cadastrar no vetor
        vetor.push({"produto":produto, "marca":marca, "valor":valor})

        // Listar produtos
        listar()

        // Limpar campos
        limparCampos()
    
    }

}

function listar(){

    // Obter tabela
    var tabela = document.getElementById("tabela")

    // Limpar conteúdos da tabela
    tabela.innerHTML = ""

    // Laço
    for(var indice=0; indice < vetor.length; indice++){

        // Criar linha para a tabela
        var linha = tabela.insertRow()

        // Criar colunas para a linha
        var coluna1 = linha.insertCell(0)
        var coluna2 = linha.insertCell(1)
        var coluna3 = linha.insertCell(2)
        var coluna4 = linha.insertCell(3)
        var coluna5 = linha.insertCell(4)

        // Adicionar valores as colunas
        coluna1.innerHTML = vetor[indice].produto
        coluna2.innerHTML = vetor[indice].marca
        coluna3.innerHTML = vetor[indice].valor
        coluna4.innerHTML = "<button class='btn btn-secondary' onClick='selecionar("+indice+")'>Editar</button>"
        coluna5.innerHTML = "<button class='btn btn-danger' onClick='remover("+indice+")'>Remover</button>"

    }

}

function remover(posicao){
    
    // Remover produto do vetor
    vetor.splice(posicao, 1)

    // Atualizar tabela
    listar()

}

function limparCampos(){

    // Limpar campos
    document.getElementById("produto").value = ""
    document.getElementById("marca").value = ""
    document.getElementById("valor").value = ""

    // Cursor no campo produto
    document.getElementById("produto").focus()

}

function selecionar(posicao){
    
    // Obter a posição do vetor
    posicaoVetor = posicao

    // Exibir informações do produto no formulário
    document.getElementById("produto").value = vetor[posicao].produto
    document.getElementById("marca").value = vetor[posicao].marca
    document.getElementById("valor").value = vetor[posicao].valor

    // Exibir ou ocultar botões
    document.getElementById("btnCadastrar").style.display = "none"
    document.getElementById("btnAlterar").style.display = "inline-block"
    document.getElementById("btnCancelar").style.display = "inline-block"

}

function cancelar(){

    // Exibir ou ocultar botões
    document.getElementById("btnCadastrar").style.display = "inline-block"
    document.getElementById("btnAlterar").style.display = "none"
    document.getElementById("btnCancelar").style.display = "none"

    // Limpar campos
    limparCampos()

}

function alterar(){

    // Obter dados
    var produto = document.getElementById("produto").value
    var marca = document.getElementById("marca").value
    var valor = document.getElementById("valor").value

    // Criar um JSON
    var objeto = {"produto":produto, "marca":marca, "valor":valor}

    // Alterar no JSON
    vetor[posicaoVetor] = objeto

    // Atualizar listagem
    listar()

    // Limpar campos e voltar os botões para o estágio inicial
    cancelar()

}