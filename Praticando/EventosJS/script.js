
    var area = window.document.getElementById('area') //window. não e necessário mas tambem pode ser usado sem problema como acima
    area.addEventListener('click', clicar)
    area.addEventListener('mouseenter', entrar)
    //area.addEventListener('mousemove', mover)
    area.addEventListener('dblclick', duplo)
    area.addEventListener('mouseout', sair)

    

    
    var cores = ['gray', 'brown', 'red', 'green', 'pink']//Guarda cores num array
    var item = getArrayRandomElement(cores);//cria variavel e manda pra uma function onde sera sorteada as cores
    
function getArrayRandomElement(arr){//as cores poderão ser chamadar com o 'arr'

    if (arr && arr.length) {//se as cores existirem
        return arr[Math.floor(Math.random() * arr.length)];//retorna uma cor aleatoria (sendo sorteado pelo numero de sua chave não passando do limite "arr.length")
      }
    
}


    function clicar(){
        area.innerText = 'Clicou!'
        area.style.background = getArrayRandomElement(cores)
    }


    function entrar(){
        area.innerText = 'Mouse dentro'
        area.style.background = 'white'
    }
    
    /*function mover(){
        area.innerText = 'Movendo'
        area.style.background = 'violet'
    }*/
    
    document.addEventListener('keydown', (event) => {
      const keyName = event.key; //var - variavel global, let - variavel apenas no bloco, const - Assim como as variáveis declaradas com a palavra-chave let, constantes também tem escopo de bloco. Além disso, constantes devem ser inicializadas obrigatoriamente no momento de sua declaração.
      area.innerText = `Tecla Pressionada: ${keyName}`;
    })
    
    function duplo(){
        area.innerText = 'Clique Duplo'
        area.style.background = 'violet'
    }
    function sair(){
        area.innerText = 'Mouse fora'
        area.style.background = 'orange'
    }
    
    //################################################MUDANDO MOUSE ##################################################
    
    var mosin = getRadioValor('genero');//cria a variavel global mosin e seu valor sera o valor retornado da função gerRadioValor, passando a informação "genero"
 
       
       function getRadioValor(name){//o 'genero' é nomeado de 'name'
        var rads = document.getElementsByName(name); //cria variavel global e pega as informações dos elementos com name 'genero'
        
        for(var i = 0; i < rads.length; i++){//cria laço de repetição conforme a quantidade de elementos 'rads.length'
         rads[i].style.cursor = rads[i].value //esta linha pode ser apagada sem alterar a função. ele apenas faz que o tipo do cursor seja exibido ao passar o mouse sob o radio
            if(rads[i].checked){//entra neste bloco caso o radio esteja checkado (marcado)
          return rads[i].value;//retorna o valor do radio checado
         }
        
        }
        
        return null;//caso nenhum tenha sido checado ele retorna null
       }
      
          function mostrarGenero(){
        mosin = getRadioValor('genero');//a variavel mosin recebe o valor retornado da função getRadioValor, passando a informação "genero"
        document.getElementById("area").style.cursor = mosin//muda o estilo do cursor da area do quadrado para o estilo do valor guardado na variavel mosin
       }