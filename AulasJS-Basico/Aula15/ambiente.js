//(pode ser usado o let ou o var para criar)
let num = [5, 8, 2, 9, 3]
//Posições: 5=0, 8=1, 2=2, 9=3, 3=4.
num[4]= 6 //isso cria a posição 4 e armazena o valor 6
num.push(7)//isso adiciona um novo elemento na ultima posição e acrescenta o valor 7 
num.length //serve para saber a quantidade de elementos de um vetor

num.sort()//coloca os elementos em ordem crescente pelo seu valor "interno"
console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

/* ######################### MODO MAIS RUSTICO ############################
for(let pos=0;pos<num.length;pos++){//cria a variavel pos, testa se a variavel pos é menor que a quantidade de elementos do vetor num, incrementa 1 a variavel pos
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)//exibe o elemento segundo sua chave (pos) 
}
*/

//########################### MODO SIMPLIFICADO ########################
for(let pos in num){//otimizado para variaveis compostas e objetos. Modo como é lido: PARA CADA POSIÇÂO DENTRO DE NUM (let pos in num)
    console.log(`A posição ${pos} tem o valor ${num[pos]}`) // exibe o valor do elemento por sua chave
}

//#######################Buscar VALORES dentro de um vetor#####################################
let pos = num.indexOf(7)//procura no vetor o VALOR 7 (que no exemplo se encontra na chave/posição 3) e retorna sua chave/posição para variavel pos.
//caso não encontre um valor ele retornará -1

if (pos == -1){ //para caso não encontre nenhum valor exiba está mensagem
    console.log('O valor não foi encontrado !')
}else { //caso encontre o valor exibira o valor e sua posição
console.log(`O valor ${num[pos]} está na posição ${pos}`)
}