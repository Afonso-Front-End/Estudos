
// Vetor
let pessoas = []

// ID da pessoa
let id = 0

// Listar as pessoas
listar = () => {
    // resquisicao
    fetch('http://localhost:3000/pessoas')
    .then(retorno => retorno.json())
    .then(data => pessoas = data)
    .then(()=>{
        
    // obter table
    let tabela = document.getElementById('tabela')
    tabela.innerHTML = ''
    // Laco de repetição
    for (let index = 0; index < pessoas.length; index++) {

        // Criar linha de tabela
        let linha = tabela.insertRow(-1)

        // Criar coluna 
        let colunaLinhaID = linha.insertCell(0)
        let colunaLinhaNome = linha.insertCell(1)
        let colunaLinhaIdade = linha.insertCell(2)
        let colunaLinhaSelecionar = linha.insertCell(3)

        // Conteudo das colunas
        colunaLinhaID.innerText = pessoas[index].id
        colunaLinhaNome.innerText = pessoas[index].nome
        colunaLinhaIdade.innerText = pessoas[index].idade
        colunaLinhaSelecionar.innerHTML = `<button class="btn btn-success" onclick="selecionar(${[index]})">Selecionar</button>`
    }
    })
   
}

selecionar = (posicao) => {
    // Exibir dados nos inputs
    nome.value = pessoas[posicao].nome
    idade.value = pessoas[posicao].idade
    btnCadastrar.style.display = 'none'
    btnAlterar.style.display = 'inline-block'
    btnRemover.style.display = 'inline-block'
    btnCancelar.style.display = 'inline-block'

    // Expecificar id da pessoa
    id = pessoas[posicao].id
    
}

remover = () =>{
    fetch('http://localhost:3000/pessoas/'+id, {
        method:'delete'
    })
    .then(retorno => retorno.json())
    .then(data => {
        // retonar posicao do codigo no vetor 
        let posicaoID = pessoas.findIndex(obj => {return obj.id == id})

        // remover pessoa do vetor
        pessoas.slice(posicaoID, 1)
        // atualizar tablela
        listar()

        resetCrud()
    })
  
}

alterar = () => {
    // Objeto 
    let obj = 
    {
        "nome": nome.value,
        "idade": idade.value
    }

    // Requisicao
    fetch('http://localhost:3000/pessoas/'+id, {
        method:'put',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(obj)
    })

    .then(retorno => retorno.json())
    .then(data => {
        // retonar posicao do codigo no vetor 
        let AlterarPosicaoID = pessoas.findIndex(obj => {return obj.id == id})

        // Alterar  pessoa do vetor
        pessoas[AlterarPosicaoID] = data
        // atualizar tablela
        listar()

        resetCrud()
    })
}
resetCrud = () => {
    nome.value = ''
    idade.value = ''
    btnCadastrar.style.display = 'block'
    btnAlterar.style.display = 'none'
    btnRemover.style.display = 'none'
    btnCancelar.style.display = 'none'
}

cadastrar = () => {
    // Obter elemento
    let nome = document.getElementById('nome')
    let idade = document.getElementById('idade')
    
    // Criar obt
    let obj = {
        "nome": nome.value,
        "idade": idade.value
    }

    // Requisicao

    fetch('http://localhost:3000/pessoas',{
        headers:{
            'Content-type':'application/json'
        },
        method:'post',
        body:JSON.stringify(obj)
    })
    .then(retorno => retorno.json())
    .then(data => {
        // Adicionar nova pessoa no vetor
        pessoas.push(data)
        // Atualizar tabela
        listar()

        // limpar campos
        nome.value = ''
        idade.value = ''

        // focar cursor
        nome.focus()
    })
    
}