
        function calcular(){
            var txtv = window.document.querySelector('input#txtvel')
            var res = window.document.querySelector('div#res')// id(#) class(.)
            var vel = (txtv.value) //pega o valor digitado na variavel txtv
            
            if(vel=='pablo'||vel=='Pablo'){
                res.style.color = 'green'
                res.innerText = `Isso mesmo é o ${vel}`
            }else{
                res.style.color = 'red'
                res.innerText = `Você errou, não é ${vel} !`
            }
            // += (concatena para não apagar a mensagem anterior)
            
        }

        /*
        var pressed = document.getElementById('pressed');

function keyPressed(evt){
    evt = evt || window.event;
    var key = evt.keyCode || evt.which;
    return String.fromCharCode(key); 
}

document.onkeypress = function(evt) {
    var str = keyPressed(evt);
    pressed.innerHTML += str;
}
*/