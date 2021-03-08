function verificar(){
    var data = new Date()
    var ano =  data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){ //checa se a caixa esta vazia ou se e maior que o ano atual
        window.alert('[ERRO] MACACO')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')//e como se voce colocasse o id foto na imagem html
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebehomem.jpg')
            }else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'jovemhomem.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adultohomem.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'idosohomem.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebemulher.jpg')
            }else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'jovemmulher.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adultomulher.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'idosomulher.jpg')
            }
        }
        img.style.width = '300px'
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //colocar conteudo/elemento abaixo
    }
}