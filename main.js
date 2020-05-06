document.onkeydown = Move


function moveRight() {

    var elemento = document.getElementById('Pposicao');
    var posicao = elemento.offsetLeft;
    
    elemento.style.left = posicao + 20+"px";

    // alert(posicao+"1"+"px")

}


function moveLeft() {

    var elemento = document.getElementById('Pposicao');
    var posicao = elemento.offsetLeft;
    
    elemento.style.left = posicao - 20+"px";

    // alert(posicao - 1 +"px")

}




function Move() {
    var entrada;
    entrada = window.event.keyCode;

    if (entrada == 83) {
        moveRight();    
    }
    else if(entrada == 65 )
        moveLeft();
    // if (window.event)
    //     {keycode = window.event.keyCode;
        
        
    //     }
        
    // else if (e)
    //     {keycode = e.which;}
    // alert("keycode: " + keycode);
    }

