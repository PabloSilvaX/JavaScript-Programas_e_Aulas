var nome1 = document.querySelector('input#prod1').value
var quantidade1 = document.querySelector('input#Unidade1').value
var nome2 = document.querySelector('input#prod2').value
var quantidade2 = document.querySelector('input#Unidade2').value
var nome3 = document.querySelector('input#prod3').value
var quantidade3 = document.querySelector('input#Unidade3').value

var res = window.document.querySelector('div#res')


function adicionar(numero){
    if(numero==1){
    var res = window.document.querySelector('div#res')
    var nome1 = document.querySelector('input#prod1').value
    var quantidade1 = document.querySelector('input#Unidade1').value
    var image1 = document.querySelector('td#imagem1').innerHTML

    if(quantidade1>0){
        res.innerHTML += `Imagem: ${image1}, Nome: ${nome1}, Quantidade ${quantidade1}.<br><br>`    
    }

    }
    if(numero==2){
    var res = window.document.querySelector('div#res')
    var nome2 = document.querySelector('input#prod2').value
    var quantidade2 = document.querySelector('input#Unidade2').value
    var image2 = document.querySelector('td#imagem2').innerHTML

    if(quantidade2>0){
        res.innerHTML += `Imagem: ${image2}, Nome: ${nome2}, Quantidade ${quantidade2}.<br><br>`    
}

    }
    if(numero==3){
    var res = window.document.querySelector('div#res')
    var nome3 = document.querySelector('input#prod3').value
    var quantidade3 = document.querySelector('input#Unidade3').value
    var image3 = document.querySelector('td#imagem3').innerHTML

    if(quantidade3>0){
    res.innerHTML += `Imagem: ${image3}, Nome: ${nome3}, Quantidade ${quantidade3}.<br><br>`    
}
    
}

}
function limpa(){
    res.innerHTML = ''
}