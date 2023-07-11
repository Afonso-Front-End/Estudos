// Importar express
const express = require('express')

// Importar express-hadlebars
const {engine} = require('express-handlebars')

// Importar o modulo mysql
const mysql = require('mysql2')
 
// Importar o modulo path (responsavel por gerenciar diretorios)
const path = require('path')


// efetuar a conexao
const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'node_mysql'
})

// Testar conexão
conexao.connect((erro)=>{
    if(erro) throw erro;
    console.log('Conexão efetuada')
})


// Criar um objeto para ter acesso as funionalidades do express
const app = express()

// Referencias de diretorios
app.use('/bootstrap_css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/style', express.static(path.join(__dirname, 'style')))

// Configurar o body-parse (transitar dados entre rotas)
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Configurações do handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


// Rotas 
app.get('/', (req, res)=>{
    // Sql  
    let sql = 'SELECT * FROM pessoas'

    // Executar comando sql
    conexao.query(sql, (erro, returne)=>{
        if (erro) {
            res.redirect('/falhaListagem')
        }else{
            res.render('home', {pessoas:returne})
        }
    })
})

app.get('/:mensagem', (req, res) => {
    let sql = 'SELECT * FROM pessoas'

    conexao.query(sql, (erro, returne)=>{
        switch (req.params.mensagem) {
            // COndicional
            case 'okCadastro':
            res.render('home', { 'okCadastro': true, 'pessoas':returne})
            break;
            
            case 'falhaCadastro':   
            res.render('home', { 'falhaCadastro': true, 'pessoas':returne })
            break
    
            case 'falhaListagem':
            res.render('home', { 'falhaListagem': true, 'pessoas':returne })
            break
    
            case 'falhaRemocao':
            res.render('home', { 'falhaRemocao': true, 'pessoas':returne })
            break
    
            case 'okRemocao':
            res.render('home', { 'okRemocao': true, 'pessoas':returne })
            break
        }
    })
})

// Rota cadastro
app.post('/cadastrar', (req, res)=>{
    // SQL
    let sql = `INSERT INTO pessoas (nome, idade) VALUES('${req.body.nome}', ${req.body.idade})`

    //  Executar comando sql
    conexao.query(sql,(erro, resturne)=>{
        if(erro) {
            res.redirect('/falhaCadastro')
        }else{
            res.redirect('/okCadastro')
        }
    })
})

app.get('/remover/:codigo', (req, res)=>{
    
    // sql
    let sql = `DELETE FROM pessoas WHERE codigo = ${req.params.codigo}`

    // Executar comando SQL
    conexao.query(sql, (erro, returne)=>{
        // condicional
        if (erro) {
            res.redirect('/falhaRemocao')
        }else{
            res.redirect('/okRemocao')
        }
    })
})

app.listen(8080)
