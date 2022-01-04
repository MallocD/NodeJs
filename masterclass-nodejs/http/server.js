const http = require('http')//Faz a requisição do módulo "http"
const fs = require('fs')//Requisição do módulo para poder ler arquivos
const path = require('path')
const { extname } = require('path/posix')

http.createServer((req, res) =>{//parâmetros de requisição e resposta http
    const file = req.url== '/'? 'index.html' : req.url//Operação ternário
    const filePath = path.join(__dirname,'public',file)
    const extname = path.extname(filePath)//Faz a requisição do Filepath e as extensões contidas nele

    const allowedFileTypes =['.html','.css','.js'] //Somente arquivos com essas extensões seram buscados
    const allowed = allowedFileTypes.find(item=>item==extname)//Compara a busca das extensões permitidas e com as do path e retorna somente as que são iguais as requisitadas
   
    if(!allowed) return
    
    fs.readFile(
        filePath,
        (err,content)=>{
            if(err) throw err

            res.end(content)//irá trazer/ler o conteúdo
        }
    ) 
    
    

}).listen(5100,()=>console.log('server is running'))//número da porta http, e pedindo para que seja mostrado no console 
