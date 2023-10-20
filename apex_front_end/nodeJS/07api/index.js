const { required } = require("nodemon/lib/config");

const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

let dados = []

let codigo = 1

// Rota listas dados 
app.get('/', (req, res)=>{
    res.json(dados)
    res.end()
})

// rota para retornar a quantidade de registros
app.get('/', (req, res)=>{
    res.status(200).json({'registros':dados.length})
    res.end()
})

// Rota para listar atravez do codigo
app.get('/:codigo', (req, res)=>{
    // Verificar a existencia do codigo
    let posicao = dados.findIndex(objDados => {return objDados.codigo == req.params.codigo})
    
    // restorno
    if(posicao == -1){
        res.status(404).json({'Error': 'Posicao não encontrada'})
    }else{
        res.status(200).json(dados[posicao])
    }
    res.end()
})

// Rota para cadastrar
app.post('/', (req , res)=>{

    if (req.body.nome == undefined || req.body.idade == undefined) {
        res.status(400).json({'Error':'Digite um nome e uma idade'})
    }else{
        // Cria objeto
        let obj = {
            'codigo':codigo,
            'nome':req.body.nome,
            'idade':req.body.idade
        }
        //  cadastrar o obj no json
        dados.push(obj)

        // Incrementar o codigo
        codigo+=1
    
        // Retorno 
        res.json(obj)
        res.end()
    }

})

// Alterar dados
app.put('/', (req, res)=>{
    // Verificar a existencia do codigo
    let posicao = dados.findIndex(objDados => {return objDados.codigo == req.body.codigo})
 
    // criar um novo obg
    let novoObj = {
        'codigo': req.body.codigo,
        'nome': req.body.nome,
        'idade': req.body.idade
    }

    // Alterar dados
    dados[posicao] = novoObj
    res.status(200).json({'mensagem':'Dados alterados com sucesso'})
    res.end()
})

// Rota para remover
app.delete('/:codigo', (req, res)=>{{
     // Verificar a existencia do codigo
     let posicao = dados.findIndex(objDados => {return objDados.codigo == req.params.codigo})

     //remover resgistro
     dados.splice(posicao, 1)
    
    //  restorno
    res.status(200).json({'mensagem':'Registro removido com sucesso'})
}})


app.listen(8080)