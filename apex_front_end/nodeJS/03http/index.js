// modulo http
const http = require('http')

// Criar um servidor 
http.createServer((req, res)=>{

    res.write('oi')
    res.end()
}).listen(8080)