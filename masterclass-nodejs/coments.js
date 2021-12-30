
//console.log(os)
//console.log(os.platform())//Mostra a plataforma utilizada


//let a = " Hello Wolrd!"
const os = require('os')//Require: Importação de módulos//Módulo :os


//console.log(a)
setInterval(()=>{//Função Global que Seta intervalo de tempo utilizando uma arrow function//A cada 2s que passar o código será passado novamente
    
    
    
    //const freemen = os.freemem//Criação de váriavel
    //const totalmen = os.freemem//Crição de variável
    
    //console.log(`${parseInt(freemem()/1024/1024)}-MB`,totalmem())//Mostrar as functions buscadas dentro do os
    //console.log(total,mem,percents)

    const { freemem, totalmem} = os//Estratégia de desestruturação//Como se pegasse as functions dentro do os e jogando para as variáves
    const total = parseInt(totalmem()/1024/1024)//Criando váriaves já convertidas e arredondadas a partir dos valores das functions
    
    const mem = parseInt(freemem()/1024/1024)//Criando váriaves já convertidas e arredondadas a partir dos valores das functions
    const percents = parseInt((mem/total)*100)//Convertendo a divsão de mem/total em porcentagem a multiplicando por 100
    const stats = {//Utilizando criação de objeto para formatação
        total: `${total}-MB`,
        free: `${mem}-MB`,
    }
        usage: `${percents}%`
        console.log("========PC STATS========")
    console.clear()//Limpar o console(terminal) a cada vez que o código se repetir
    
    console.table(stats)//Mostra no terminal em forma de tabela, uma maneira mais bela de se ver
    ,2000
})

//Logger
const EventEmitter = require('events')// Faz a requisição do módulo events do Node
const emitter= new EventEmitter()//Cria um objeto apartir da requisição de EventEmitter

emitter.on('log', (message)=>{//Cria o ouvidor emmiter(Fica esperando ser chamado) utilizando uma arrow funciton, passando como chamada a palavra "log", e com parâmetro para retorno o "messege"
    console.log(message)
})

function log(message){//Criação de função para que a mensagem seja passada a apartir da palavra log, assim buscando o emmiter.emit dentro da function
    emitter.emit('log',message)//Assim que o parametro message for passado pelo log, ele irá mandar para o emitter.emit/ o emitter.emit irá fazer a chamada do log, passando parametro da function log e o emmiter on irá receber o parametro assim rodando o console.log com o parametro passado
}

log("Boa noite como está?")
log("A seguir será mostrado algumas informações sobre memória de seu computador :")
log("=============================================================================")


module.exports = log//Utizido para exportar funções para outro arquivo que faça sua requisição

//emitter.emit('log',"mensagem que será passada")//Chamando o emitter a partir do emit

//Módulo Fs-> File System e Módulo path

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


module.exports = log//Utizido para exportar funções para outro arquivo que faça sua requisição

//emitter.emit('log',"mensagem que será passada")//Chamando o emitter a partir do emit







