let quadrados = document.querySelectorAll(".casa");
let resposta = document.querySelector("h3");
let botao = document.querySelector("button");

let count = 0;

function gerarJogada(){
    if(this.innerHTML == ""){
        if (count % 2 == 0){
            this.innerHTML = "X";
            count++;
            verificarResultado();
        } else {
            this.innerHTML= "O";
            count++;
            verificarResultado();
        } 

    }
    
}

for(let quadrado of quadrados){
    quadrado.onclick = gerarJogada;
}
function verificarResultado (){
    if(quadrados[0].innerHTML !=="" && quadrados[0].innerHTML === quadrados[1].innerHTML && quadrados[1].innerHTML=== quadrados[2].innerHTML){
        resposta.innerHTML = "voce venceu";
    } 
    else if(quadrados[3].innerHTML !=="" && quadrados[3].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML=== quadrados[5].innerHTML){
        resposta.innerHTML = "voce venceu";
    } 
    else if(quadrados[6].innerHTML !=="" && quadrados[6].innerHTML === quadrados[7].innerHTML && quadrados[7].innerHTML=== quadrados[8].innerHTML){
        resposta.innerHTML = "voce venceu";
    } 
    else if(quadrados[0].innerHTML !=="" && quadrados[0].innerHTML === quadrados[3].innerHTML && quadrados[3].innerHTML=== quadrados[6].innerHTML){
        resposta.innerHTML = "voce venceu";
    } 
    else if(quadrados[1].innerHTML !=="" && quadrados[1].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML=== quadrados[7].innerHTML){
        resposta.innerHTML = "voce venceu";
    } 
    else if(quadrados[2].innerHTML !=="" && quadrados[2].innerHTML === quadrados[5].innerHTML && quadrados[5].innerHTML=== quadrados[8].innerHTML){
        resposta.innerHTML = "voce venceu";
    } 
    else if(quadrados[0].innerHTML !=="" && quadrados[0].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML=== quadrados[8].innerHTML){
        resposta.innerHTML = "voce venceu";
    } 
    else if(quadrados[2].innerHTML !=="" && quadrados[2].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML=== quadrados[6].innerHTML){
        resposta.innerHTML = "voce venceu";
    } 
    else if(count==9){
        resposta.innerHTML="deu velha";
    }

    
}

function resetar(){
    for(let quadrado of quadrados){
        quadrado.onclick = gerarJogada;
        quadrado.innerHTML = "";
        count = 0;
    }
}

botao.onclick = resetar;
