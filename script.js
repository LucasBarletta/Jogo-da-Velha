let quadrados = document.querySelectorAll(".casa");
let cores = ["red", "blue"];


function gerarX(){
    this.style.backgroundColor = cores[0];
}

function gerarO(){
    this.style.backgroundColor = cores[1]; 
}
let count = 0;



function gerarJogada(){
    if (count % 2 == 0){
        this.innerHTML = "X";
        count++;
    } else {
        this.innerHTML= "O";
        count++;
    } 
}



for(let quadrado of quadrados){
    quadrado.onclick = gerarJogada;
}



