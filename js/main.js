//FUNÇÃO QUE FALA BD, BT OU BN, DEPENDENDO DO HORARIO
const saudacao = document.querySelector('.about-me p span')
const hora = new Date().getHours();

if (hora < 6 || hora >= 18) {
    saudacao.innerText = 'Boa noite!'
} else if (hora < 12) {
    saudacao.innerText = 'Bom dia!'
} else {
    saudacao.innerText = 'Boa tarde!'
}


//RODAPÉ
const ano = new Date()
const anoAtual = ano.getFullYear()
const rodape = document.querySelector('footer>div>span')

rodape.innerHTML = anoAtual;
