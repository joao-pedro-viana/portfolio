/* Mudar a cor do tema do Portfólio — versão refatorada com spread/rest/destructuring */

// Aplica uma propriedade de estilo a "quantos elementos vierem" (rest params)
function aplicarEstilo(propriedade, valor, ...elementos) {
    elementos.forEach(el => el && (el.style[propriedade] = valor))
}

// Decide cor de contraste e borda de acordo com o tema escolhido
function getEstiloContraste(corTema) {
    const branco = corTema === 'var(--whitecolor)'
    const amarelo = corTema === '#ffff7a' || corTema === 'yellow'

    if (branco || amarelo) {
        return { cor: 'var(--blackcolor)', borda: branco ? '2px solid var(--blackcolor)' : '' }
    }
    return { cor: 'var(--whitecolor)', borda: '' }
}

function mudarCor(corTema) {
    localStorage.setItem('portfolioThemeColor', corTema)

    // Cor do texto
    const itemsColor = [
        document.querySelector('header>span'),
        document.querySelector('.about>h1'),
        ...document.querySelectorAll('form>h3')
    ]
    aplicarEstilo('color', corTema, ...itemsColor)

    // Cor de fundo
    const bgColorItems = [
        document.querySelector('header>button'),
        document.querySelector('.more'),
        document.querySelector('form>button'),
        document.getElementById('menu-hamb'),
        ...document.querySelectorAll('.info-projects a button')
    ]
    aplicarEstilo('backgroundColor', corTema, ...bgColorItems)

    // Sombra
    const shadowColorItems = [
        document.querySelector('header>button'),
        document.querySelector('.about>.photoPortfolio'),
        document.querySelector('form>button'),
        ...document.querySelectorAll('.info-projects>a>button')
    ]
    aplicarEstilo('boxShadow', `0 0 1rem 0.1rem ${corTema}`, ...shadowColorItems)

    // Estilos específicos que não seguem o padrão genérico
    const aboutH3 = document.querySelector('.about>h3')
    if (aboutH3) {
        aboutH3.style.textShadow = `2px 2px 5px ${corTema}`
        aboutH3.style.borderBottom = `5px solid ${corTema}`
    }

    const menuHamb = document.getElementById('menu-hamb')
    if (menuHamb) menuHamb.style.border = `3px solid ${corTema}`

    aplicarEstilo('borderBottom', `3px solid ${corTema}`, ...document.querySelectorAll('form>h3'))
    aplicarEstilo(
        'background',
        `radial-gradient(circle at 10% 24%, ${corTema} 0%, transparent 10%)`,
        ...document.querySelectorAll('.particulas, .particulas2')
    )

    // Hover nos links do menu (mouseenter + mouseleave num único loop)
    const linksMenu = [...document.querySelectorAll('header>ul>a>li, .button-about>a>button, #links-mobile a li')]
    linksMenu.forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.style.color = corTema
            document.documentElement.style.setProperty('--primary-color', corTema)
        })
        link.addEventListener('mouseleave', function () {
            this.style.color = 'var(--whitecolor)'
        })
    })

    // Foco nos inputs do formulário (focus + blur num único loop)
    const camposForm = [...document.querySelectorAll('form>input, form>textarea')]
    camposForm.forEach(input => {
        input.addEventListener('focus', function () {
            this.style.boxShadow = `0 0 .5rem .1rem ${corTema}`
        })
        input.addEventListener('blur', function () {
            this.style.boxShadow = ''
        })
    })

    // Contraste de texto/borda nos botões e ícones, dependendo da cor escolhida
    const { cor, borda } = getEstiloContraste(corTema)
    const botoesProjetos = [...document.querySelectorAll('.info-projects>a>button')]
    const elementosContraste = [
        document.querySelector('#btnColor i'),
        document.querySelector('#menu-hamb i'),
        document.querySelector('form>button')
    ]

    aplicarEstilo('color', cor, ...botoesProjetos, ...elementosContraste)
    aplicarEstilo('border', borda, ...botoesProjetos)
}

// Salva a cor escolhida, até que o usuário selecione outra
function salvarCor() {
    const corSalva = localStorage.getItem('portfolioThemeColor') ?? '#002aff'
    mudarCor(corSalva)
}

salvarCor()