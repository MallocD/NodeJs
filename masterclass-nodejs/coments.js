
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











