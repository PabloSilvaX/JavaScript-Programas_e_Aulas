
function somar(){
    var valor = document.querySelector('input#numeroin').value
    valor++
    document.querySelector("input#numeroin").value = (valor)
}

function subtrair(){
    var valor = document.querySelector('input#numeroin').value
    valor--
    document.querySelector("input#numeroin").value = (valor)
}
