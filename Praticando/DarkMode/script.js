

function myFunction() {
    var element = document.body; //ve o body e o mantem na variavel element
    element.classList.toggle("dark-mode"); //transforma o element(body) nos valores do dark-mode
    var botaozin =  window.document.getElementById('tecoteco');
    botaozin.classList.toggle("botao-dark");
    var setor =  window.document.getElementById('sect');
    setor.classList.toggle("section-dark");

    var res = document.querySelector('div#ginga')

    if(botaozin.innerHTML=='Modo Escuro'){
    botaozin.innerHTML = 'Modo Claro';
    res.innerHTML = '<br><img src="noite.jpg" width="50" alt="">'
    }else{
        botaozin.innerHTML = 'Modo Escuro';
        res.innerHTML = '<br><img src="manha.jpg" width="50" alt="">'
    }
 }
 

 /** Forma mais Amadora de fazer:
  * 
  *  if(document.body.style.background == 'white'){
        document.body.style.background = 'black'
    }else{
        document.body.style.background = 'white'
    }
  */