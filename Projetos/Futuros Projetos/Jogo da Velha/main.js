<<<<<<< HEAD
//Escolher o jogador (X ou O), deixando o computador jogar com o outro símbolo
const jogadorX = document.querySelector('.jogadorX');
const jogadorO = document.querySelector('.jogadorO');

jogadorX.addEventListener('click', () => {
    window.alert('Você escolheu jogar com X');
    let opcaoX = window.prompt('Deseja começar a partida? Responda com sim ou não.');
    opcaoX = opcaoX.toUpperCase();

    switch (opcaoX) {
        case 'SIM':
            window.alert('Você começará a partida');
            break;
        case 'NÃO':
            window.alert('O computador começará a partida');
            break;
        default:
            window.alert('Opção inválida');
            break;

   }

document.querySelector('.jogador').innerText = 'X'
document.querySelector('.computador').innerText = 'O'
});

jogadorO.addEventListener('click', () => {
    window.alert('Você escolheu jogar com O');
    let opcaoO = window.prompt('Deseja começar a partida? Responda com sim ou não.');
    opcaoO = opcaoO.toUpperCase();

    switch (opcaoO) {
        case 'SIM':
            window.alert('Você começará a partida');
            break;
        case 'NÃO':
            window.alert('O computador começará a partida');
            break;
        default:
            window.alert('Opção inválida');
            break;
    }

document.querySelector('.jogador').innerText = 'O'
document.querySelector('.computador').innerText = 'X'
});

//Criar um botão para reiniciar o jogo
const reiniciar = document.querySelector('.reset');
reiniciar.addEventListener('click', () => {
    window.location.reload();
});

//Função para impedir que o jogador clique no quadrado antes de escolher o jogador
const quadrados = document.querySelectorAll('.quadrado');
quadrados.forEach(quadrado => {
    quadrado.addEventListener('click', () => {
        if (document.querySelector('.jogador').innerText === '') {
            window.alert('Escolha entre X ou O antes de jogar');
        }})});

//Todas as combinações possíveis para vencer
const combinacoes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];

//Função para iniciar o jogo, uma vez que o jogador escolheu o símbolo
function escolherSimbolo() {
    let simbolo = document.querySelectorAll('.quadrado')
    simbolo.forEach(simbolos => {
        simbolos.addEventListener('click', () => {
            if (document.querySelector('.jogador').innerText === 'X') {
                simbolos.innerText = 'X';
            } else if (document.querySelector('.jogador').innerText === 'O') {
                simbolos.innerText = 'O';
            }
    });
 });
}

/*Função para deixar o computador escolher aleatoriamente um quadrado para jogar por vez,
quando o jogador não quiser jogar primeiro*/
function computadorJoga() {
    let sinalPC = document.querySelectorAll('.quadrado')
    sinalPC.Math.floor(Math.random() * 9);
    sinalPC.forEach(sinal => {
        sinal.addEventListener('click', () => {
            if (document.querySelector('.jogador').innerText === 'O') {
                sinal.innerText = 'O';
            } else if (document.querySelector('.jogador').innerText === 'X') {
                sinal.innerText = 'X';
            }
    });
 });
=======
//Escolher o jogador (X ou O), deixando o computador jogar com o outro símbolo
const jogadorX = document.querySelector('.jogadorX');
const jogadorO = document.querySelector('.jogadorO');

jogadorX.addEventListener('click', () => {
    window.alert('Você escolheu jogar com X');
    let opcaoX = window.prompt('Deseja começar a partida? Responda com sim ou não.');
    opcaoX = opcaoX.toUpperCase();

    switch (opcaoX) {
        case 'SIM':
            window.alert('Você começará a partida');
            break;
        case 'NÃO':
            window.alert('O computador começará a partida');
            break;
        default:
            window.alert('Opção inválida');
            break;

   }

document.querySelector('.jogador').innerText = 'X'
document.querySelector('.computador').innerText = 'O'
});

jogadorO.addEventListener('click', () => {
    window.alert('Você escolheu jogar com O');
    let opcaoO = window.prompt('Deseja começar a partida? Responda com sim ou não.');
    opcaoO = opcaoO.toUpperCase();

    switch (opcaoO) {
        case 'SIM':
            window.alert('Você começará a partida');
            break;
        case 'NÃO':
            window.alert('O computador começará a partida');
            break;
        default:
            window.alert('Opção inválida');
            break;
    }

document.querySelector('.jogador').innerText = 'O'
document.querySelector('.computador').innerText = 'X'
});

//Criar um botão para reiniciar o jogo
const reiniciar = document.querySelector('.reset');
reiniciar.addEventListener('click', () => {
    window.location.reload();
});

//Função para impedir que o jogador clique no quadrado antes de escolher o jogador
const quadrados = document.querySelectorAll('.quadrado');
quadrados.forEach(quadrado => {
    quadrado.addEventListener('click', () => {
        if (document.querySelector('.jogador').innerText === '') {
            window.alert('Escolha entre X ou O antes de jogar');
        }})});

//Todas as combinações possíveis para vencer
const combinacoes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];

//Função para iniciar o jogo, uma vez que o jogador escolheu o símbolo
function escolherSimbolo() {
    let simbolo = document.querySelectorAll('.quadrado')
    simbolo.forEach(simbolos => {
        simbolos.addEventListener('click', () => {
            if (document.querySelector('.jogador').innerText === 'X') {
                simbolos.innerText = 'X';
            } else if (document.querySelector('.jogador').innerText === 'O') {
                simbolos.innerText = 'O';
            }
    });
 });
}

/*Função para deixar o computador escolher aleatoriamente um quadrado para jogar por vez,
quando o jogador não quiser jogar primeiro*/
function computadorJoga() {
    let sinalPC = document.querySelectorAll('.quadrado')
    sinalPC.Math.floor(Math.random() * 9);
    sinalPC.forEach(sinal => {
        sinal.addEventListener('click', () => {
            if (document.querySelector('.jogador').innerText === 'O') {
                sinal.innerText = 'O';
            } else if (document.querySelector('.jogador').innerText === 'X') {
                sinal.innerText = 'X';
            }
    });
 });
>>>>>>> b0fe616 (Botão de Acesso nos Projetos)
}