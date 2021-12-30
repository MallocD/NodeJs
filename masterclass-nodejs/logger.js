const EventEmitter = require('events')// Faz a requisição do módulo events do Node
const path = require('path')//Independente da Máquina ele pega o local exato do arquivo
const fs = require('fs')//Riquisição do módulo file System//Utilizado para gravar no arquivo

const emitter= new EventEmitter()//Cria um objeto apartir da requisição de EventEmitter

emitter.on('log', (message)=>{//Cria o ouvidor emmiter(Fica esperando ser chamado) utilizando uma arrow funciton, passando como chamada a palavra "log", e com parâmetro para retorno o "messege"
    fs.appendFile(path.join(__dirname,'log.txt'),message,err=>{//path.join => Irá pegar o melhor caminho independente da máquina até o diretório atual e adicionar as "message" ao arquivo log.txt
        if(err){ return err}
    })//Fs.appendFile irá pegar qual arquivo ele tem que ler, segunda a mensagem que está sendo inserida, e a terceira uma callbeck functon
})

function log(message){//Criação de função para que a mensagem seja passada a apartir da palavra log, assim buscando o emmiter.emit dentro da function
    emitter.emit('log',message)//Assim que o parametro message for passado pelo log, ele irá mandar para o emitter.emit/ o emitter.emit irá fazer a chamada do log, passando parametro da function log e o emmiter on irá receber o parametro assim rodando o console.log com o parametro passado
}

log("Boa noite como está?")
log("A seguir será mostrado algumas informações sobre memória de seu computador :")
log("=============================================================================")



//emitter.emit('log',"mensagem que será passada")//Chamando o emitter a partir do emit

module.exports = log//Utizido para exportar funções para outro arquivo que faça sua requisição
