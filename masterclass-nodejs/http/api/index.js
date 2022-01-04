const http = require('http')//Faz a requisição do módulo "http"
const data = require('./urls.json')
const URL = require('url')
const fs= require('fs')
const path = require('path')


function writeFile(cb){
fs.writeFile(
    path.join(__dirname,"urls.json"),
     JSON.stringify(data,null,2),
     err => {
         if(err) throw err

         cb(JSON.stringify({message:"ok"}))
        }
    )   
}
http.createServer((req, res) =>{//parâmetros de requisição e resposta http
  
    const {name,url,del}= URL.parse(req.url,true).query//Extrair da requisição os valores do query um valor para name e url

    res.writeHead(200,{
        'Access-Control-Allow-Origin': '*'
    })
    //all resources
    if(!name || !url)
        return res.end(JSON.stringify(data))

    if (del){
     data.urls = data.urls.filter(item => String(item.url)!=String(url))//Faz a filtragrem, caso a url ja foi salva dentro do objeto json ela será apagada e caso não exista será adicionada
        return writeFile((message) =>{ res.end(message)})
    }

    data.urls.push({name,url})
    return writeFile((message)=> res.end(message))   

}).listen(3000,()=>console.log('Api is runing'))//número da porta http, e pedindo para que seja mostrado no console 