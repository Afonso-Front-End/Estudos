// Referenciar modulo express

const express = require('express');

// Referenciar modulo express-handlebars
const {engine} = require('express-handlebars')

// App
const app = express();

// Config express-handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.set('views', './views');


app.get('/', (resq , res)=>{
    res.render('pagina1',{'nome':'Afonso', 'exibir':false})
})

app.get('/pg2', (resq , res)=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resposta => resposta.json())
    .then(dados => {
        res.render('pagina2', {'vetor':dados})
    })
})

app.listen(8080)