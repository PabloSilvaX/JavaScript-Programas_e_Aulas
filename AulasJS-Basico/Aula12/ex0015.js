var agora = new Date()//obtem hora
var diaSem = agora.getDay()//pega a hora da data

console.log(diaSem)

switch(diaSem) { //bom para valores pontuais
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] Ola invalido!')
        break
}



//Condição multipla de valores fixos
/*
switch (expressão){
    case valor 1:
break                       #obrigatorio break
    case valor 2:
break                       #obrigatorio break para parar execução
    case valor 3:
break                       #obrigatorio break para parar execução
    default:
        break                       #obrigatorio break para parar execução
}
*/ 