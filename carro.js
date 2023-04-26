//LISTAS

let xCarros = [600,600,600,600,600,600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 3.2, 2.5, 4, 5, 2.2];

//FUNÇÕES 

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], 60, 40);
  }
}


function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];  
  }
}


function voltaPosicaoInicialCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    if (passouTodaTela(xCarros[i])){
        xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarros){
  return xCarros < -50;
}