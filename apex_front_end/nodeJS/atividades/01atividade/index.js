const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

let dados = []

let codigo = 1

app.get('/', (req, res) => {
    res.json(dados)
    res.end()
})

app.get('/registros', (req, res) => {
    res.status(200).json({ mensagem: dados.length })
    res.end()
})

app.get('/:codigo', (req, res) => {
    let posicao = dados.findIndex(produto => { return produto.codigo == req.params.codigo })
    res.json({ mensagem: dados[posicao] })
    res.end()
})

app.get('/nomeContem/:letra', (req, res) => {
    let filter = [];

    for (let index = 0; index < dados.length; index++) {
        if (dados[index].nome.toLowerCase().indexOf(req.params.letra) != -1) {
            filter.push(dados[index]);
        }
    }
    
    if(filter.length > 0){
        res.json({ 'mensagem': filter })
    }else{
        res.status(404).json({mensagem:'não foi encontrado nenhum produto'})
    }

    res.end()
})

app.put('/', (req, res)=>{
    let posicao = dados.findIndex(produto => { return produto.codigo == req.body.codigo })

    let novoProduto = {
        'codigo': req.body.codigo,
        'nome': req.body.nome,  
        'marca': req.body.marca,
        'valor': req.body.valor
    }
    dados[posicao] = novoProduto
    res.json({mensagem: 'dados alterados com sucesso'})
    res.end()
})

app.get('/precoMinimo8&precoMaximo/:preco', (req, res) => {
    const preco = parseFloat(req.params.preco);
    const produtosFiltrados = dados.filter((produto) => produto.valor == preco);

    if (produtosFiltrados.length > 0) {
        res.json({ mensagem: produtosFiltrados });
    } else {
        res.json({ mensagem: 'Nenhum dado encontrado com esse valor.' });
    }
});

app.delete('/', (req, res)=>{
    let posicao = dados.findIndex(produto => { return produto.codigo == req.body.codigo })

    dados.splice(posicao, 1)

    res.status(200).json({mensagem:'Registro removido com sucesso'})
})
app.post('/', (req, res) => {
    let produto = {
        'codigo': codigo,
        'nome': req.body.nome,
        'marca': req.body.marca,
        'valor': req.body.valor,
    }

    dados.push(produto)
    codigo += 1

    res.json(produto)
    res.end()
})

app.listen(8080)