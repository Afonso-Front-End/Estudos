const express = require('express')

// App
const app = express()

// Rota GET
app.get('/', (req, res)=>{
    res.write('Utilizando o express')
    res.end()
})

// Servidor
app.listen(8080)