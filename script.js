let order = [];
let clickedOrder = [];
let score = 0;

//0-verde
//1-vermelho
//2-amarelo
//3-azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// Cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]); // cada elemento na pos i - indice do array 
        lightColor(elementColor, Number(i) + 1);
    }
}
// acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}
// Checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê Acertou! Iniciando próximo nível.`);
        nextLevel();
    }
}

// Função para o clique do usuário
 let click = (color) => {
     clickedOrder[clickedOrder.length] = color;
     createColorElement(color).classList.add('selected');

     setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
     },250);
 }

 //função que retorna a cor
 let createColorElement = (color) => {
     if(color == 0) {
         return green;
     } else if(color == 1 ) {
         return red;
     } else if(color == 2) {
        return yellow;
    }  else if(color == 3) {
        return blue;
    }
 }

 // funcao para proximo nivel do jogo

 let nextLevel = () => {
     score++;
     shuffleOrder();
 }

 //funcao para fim de jogo(perdendo o jogo)

 let gameOver = () => {
     alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar o jogo.`);
     order = [];
     clickedOrder = [];

     playGame();
 }

let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo.');
    score = 0;

    nextLevel();

}

//clique p as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);
//0-verde
//1-vermelho
//2-amarelo
//3-azul
// inicio do jogo

playGame();
