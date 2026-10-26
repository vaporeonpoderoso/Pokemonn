let pokebola = document.getElementById("pokebola");
let area = document.getElementById("area");

let posY = 0;
let posX = 0;
let direcaoY = 1;
let direcaoX = 1;
let velocidade = 2;
let animacao;

function posicaoAleatoria(){
    //calculando posição de X no Y:
    posX = Math.random() * (area.clientWidth - pokebola.clientWidth);
    posY = Math.random() * (area.clientHeight - pokebola.clientHeight);
    pokebola.style.left = posX + "px";
    pokebola.style.top = posY + "px";
}

function moveImagem(){

    posX += velocidade * direcaoX;
    posY += velocidade * direcaoY;
    pokebola.style.left = posX + "px";
    pokebola.style.top = posY + "px";

// clientHeight é a altura interna do elemento
    if (posY >= area.clientHeight - pokebola.clientHeight
       || posY <= 0 ){
             direcaoY *= -1;
       }
// clientWidht é a largura interna do elemento
          if (posX >= area.clientWidth - pokebola.clientWidth
       || posX <= 0 ){
             direcaoX *= -1;
       }

animacao = requestAnimationFrame(moveImagem);
}


function iniciar(){
    cancelAnimationFrame(animacao);
    posicaoAleatoria();
    moveImagem();
}

function pausar(){
    cancelAnimationFrame(animacao);
}

function mudarImagem(){
    const imagens = [
    "./images/images/pokebola.png",
    "./images/images/rayquaza.gif",
    "./images/images/pokebola_blue.png",
    "./images/images/pikachu.gif",
    "./images/images/pokebola_open.png",
    "./images/images/joltik.gif",
    "./images/images/mew.gif",
    "./images/images/pokevenon.gif",
    "./images/images/meowth.gif",
    "./images/images/gengar.gif",
    "./images/images/venusaur.gif",
    "./images/images/zekrom.gif",
    "./images/images/haunter.gif",
    "./images/images/charizard.gif",
    "./images/images/wooper.gif",
  ];


const sorteada = imagens[Math.floor(Math.random()
* imagens.length)];
    pokebola.src = sorteada;

}

