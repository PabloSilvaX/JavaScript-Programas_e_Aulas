var agora = new Date()//obtem hora
var hora = agora.getHours()//pega a hora da data
console.log(`Agora são exatamente ${hora} horas.`)
if(hora<12){
    console.log('Bom Dia!')
} else if (hora <= 18){
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}
