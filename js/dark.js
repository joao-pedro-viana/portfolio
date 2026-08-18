let btnTheme = document.querySelector('#themePortfolio i')
let btnWhite = document.getElementById('corBranca')

function alternarTema() {

    document.body.classList.toggle('light')

    btnTheme.classList.toggle('fa')
    btnTheme.classList.toggle('fa-moon')

    if (document.body.classList.contains('light')) {
        btnWhite.innerText = 'Preto'
        localStorage.setItem('portfolioTheme', 'fa fa-moon')
        localStorage.setItem('portfolioTheme', 'light')
        } else {
            btnWhite.innerText = 'Branco'
            localStorage.removeItem('portfolioTheme')
        }
    }

window.onload = function () {
    let savedTheme = localStorage.getItem('portfolioTheme')
    if (savedTheme === 'light') {
        document.body.classList.add('light');
        btnTheme.classList.add('fa-moon')
        btnWhite.innerText = 'Preto'
    } else {
        document.body.classList.remove('light')
        btnWhite.innerText = 'Branco'
    }
}


btnTheme.addEventListener('click', alternarTema)
