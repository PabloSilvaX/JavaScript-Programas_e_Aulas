
var msg= window.document.getElementById('msg') //obtem o controle do objeto msg
var img = window.document.getElementById('imagem') //obtem o controle do objeto imagem


function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);//O método setTimeout () chama uma função ou avalia uma expressão após um número especificado de milissegundos(500 no caso).
//fazendo o horario atualizar a cada 500 milisegundos

  msg.innerHTML = `Agora são ${h} horas e ${m} minutos.`//exibe mensagem concatenada das horas e minutos
  if (h>=0 && h < 12){//se o horario for condizente
      //Bomdia
      img.src = 'manha.jpg'//modifica o src da imagem 
      document.body.style.background = '#e2cd9f' //modifica o estilo css do body
      msg.innerHTML += '<br>~ Manhã ~'
  } else if (h >= 12 && h < 18){
      //batard
      img.src = 'tarde.jpg'//modifica o src da imagem 
      document.body.style.background = '#b9846f'//modifica o estilo css do body
      msg.innerHTML += '<br>~ Tarde ~'
  } else{
      //banoit
      img.src = 'noite.jpg'//modifica o src da imagem 
      document.body.style.background = '#515154'//modifica o estilo css do body
      msg.innerHTML += '<br>~ Noite ~'
  }

}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10 (adiciona o zero na frente dos numeros < 10)
  return i;
}