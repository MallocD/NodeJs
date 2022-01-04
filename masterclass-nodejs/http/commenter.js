const http = require('http')//Faz a requisição do módulo "http"
const fs = require('fs')//Requisição do módulo para poder ler arquivos

http.createServer((req, res) =>{//Parâmetros de requisição e resposta http
    if(req.url=='/')//Se o final da url for / Irá retornar no corpo do documento "Home page"
        return res.end('<h1>HomePage</h1>')
    if(req.url=='/contato')//Se o final da url for /contato irá retornar "Contato"
        return res.end('<h1>Contato</h1>')    

}).listen(5000,()=>console.log('Server is running'))//Número da porta http, e pedindo para que seja mostrado no console 

  // res.end(JSON.stringify(data))
    // console.log(URL.parse(req.url,true).query)
