/*FUNÇÃO DE EXIBIR AS CORES-TEMA */
const btnColor = document.querySelector('header>#btnColor')
const btnClose = document.querySelector('.close')
const paletaCores = document.querySelector('.paleta-de-cores')

function apresentarCores() {
    paletaCores.style.display = paletaCores.style.display === 'block' ? 'none' : 'block';
}

btnColor.addEventListener('click', apresentarCores)

btnClose.addEventListener('click', () => {
    paletaCores.style.display = 'none';
})