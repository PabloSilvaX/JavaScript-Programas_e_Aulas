function carregar(){
    var msg= window.document.getElementById('msg') //obtem o controle do objeto msg
    var img = window.document.getElementById('imagem') //obtem o controle do objeto imagem
    var data = new Date() //pega a data/horario
    var hora = data.getHours() //pega as horas da data
    var minuto = data.getMinutes() //pega os minutos
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`//exibe mensagem concatenada das horas e minutos
if (hora>=0 && hora < 12){//se o horario for condizente
    //Bomdia
    img.src = 'manha.jpg'//modifica o src da imagem 
    document.body.style.background = '#e2cd9f' //modifica o estilo css do body
} else if (hora >= 12 && hora < 18){
    //batard
    img.src = 'tarde.jpg'//modifica o src da imagem 
    document.body.style.background = '#b9846f'//modifica o estilo css do body
} else{
    //banoit
    img.src = 'noite.jpg'//modifica o src da imagem 
    document.body.style.background = '#515154'//modifica o estilo css do body
}
}

