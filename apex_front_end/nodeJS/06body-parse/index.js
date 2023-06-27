// Import express
const express = require('express')

// App
const app = express()

// Configurar body-parse (transitar dados entre rotas)
app.use(express.json())

app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname + '/style'))

//rota para exiir a pagina html
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/form.html')
})

// rota para exibir os dados
app.post('/exibirDados', (req, res)=>{
    res.write('Nome:' + req.body.nome)
    res.write(' - ')
    res.write('idade:' + req.body.idade)
    res.end()
})

// servidor
app.listen(8080)