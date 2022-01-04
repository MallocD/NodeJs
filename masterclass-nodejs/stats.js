
const os = require('os')//Require: Importação de módulos//Módulo: os
const log = require('./logger')//Faz a requisição(chamada) do arquivo logger.js

setInterval(()=>{//Função Global que Seta intervalo de tempo utilizando uma arrow function//A cada 2s que passar o código será passado novamente
    const { freemem, totalmem} = os//Estratégia de desestruturação//Como se pegasse as functions dentro do os e jogando para as variáves

const total = parseInt(totalmem()/1024/1024)//Criando váriaves já convertidas e arredondadas a partir dos valores das functions
const mem = parseInt(freemem()/1024/1024)//Criando váriaves já convertidas e arredondadas a partir dos valores das functions
const percents = parseInt((mem/total)*100)//Convertendo a divsão de mem/total em porcentagem a multiplicando por 100

const stats = {//Utilizando criação de objeto para formatação
    free: `${mem}-MB`,
    total: `${total}-MB`,
    usage: `${percents}%`
}
console.clear()//Limpar o console(terminal) a cada vez que o código se repetir
console.log("========PC STATS========")
console.table(stats)//Mostra no terminal em forma de tabela, uma maneira mais bela de se ver

log(`${JSON.stringify(stats)}\n`)//Formatar, convertendo o objeto js para JSON

},4000)
