const express = require('express')

const app = express()

// Arquivos complementos
app.use(express.static(__dirname + '/style'))
app.use(express.static(__dirname + '/img'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/page.html')

})

app.listen(8080)