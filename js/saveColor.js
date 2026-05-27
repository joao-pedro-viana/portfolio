/*Mudar a cor do tema do Portfólio*/
function mudarCor(corTema) {
    //SALVA A COR NO LOCALSTORAGE
    localStorage.setItem('portfolioThemeColor', corTema)

    const itemsColor = [
        document.querySelector('header>span'), document.querySelector('.about>h1'),
    ]

    document.querySelectorAll('form>h3').forEach(h3 => h3.style.color = corTema),
        itemsColor.forEach(item => item.style.color = corTema);

    const bgColorItems = [
        document.querySelector('header>button'), document.querySelector('.more'), document.querySelector('form>button'),
        document.getElementById('menu-hamb')
    ]

    document.querySelectorAll('.info-projects a button').forEach(btn => btn.style.backgroundColor = corTema),
        bgColorItems.forEach(item => item.style.backgroundColor = corTema);

    const shadowColorItems = [
        document.querySelector('header>button'), document.querySelector('.about>.photoPortfolio'),
        document.querySelector('form>button')
    ]

    document.querySelectorAll('.info-projects>a>button').forEach(btn => btn.style.boxShadow = `0 0 1rem 0.1rem ${corTema}`),
        shadowColorItems.forEach(shadow => shadow.style.boxShadow = `0 0 1rem 0.1rem ${corTema}`);
    document.querySelector('.about>h3').style.textShadow = `2px 2px 5px ${corTema}`;
    document.querySelector('.about>h3').style.borderBottom = `5px solid ${corTema}`;
    document.querySelector('#menu-hamb').style.border = `3px solid ${corTema}`;
    document.querySelectorAll('form>h3').forEach(h3 => h3.style.borderBottom = `3px solid ${corTema}`);
    document.querySelectorAll('.particulas, .particulas2').forEach(particula => particula.style.background = `radial-gradient(circle at 10% 24%, ${corTema} 0%, transparent 10%)`)

    document.querySelectorAll('header>ul>a>li, .button-about>a>button, #links-mobile a li').forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.style.color = corTema;
            document.documentElement.style.setProperty('--primary-color', corTema);
        })
    })
    document.querySelectorAll('header>ul>a>li, .button-about>a>button, #links-mobile a li').forEach(link => {
        link.addEventListener('mouseleave', function () {
            this.style.color = 'var(--whitecolor)';
        })
    })

    document.querySelectorAll('form>input, form>textarea').forEach(input => {
        input.addEventListener('focus', function () {
            this.style.boxShadow = `0 0 .5rem .1rem ${corTema}`
        })
    })

    document.querySelectorAll('form>input, form>textarea').forEach(input => {
        input.addEventListener('blur', function () {
            this.style.boxShadow = ''
        })
    })

    //Condição se for amarelo ou branco
    if (corTema == 'var(--whitecolor)') {
        document.querySelectorAll('.info-projects>a>button').forEach(btn => btn.style.color = 'var(--blackcolor)')
        document.querySelectorAll('.info-projects>a>button').forEach(btn => btn.style.border = '2px solid var(--blackcolor)')
        document.querySelector('#btnColor i').style.color = 'var(--blackcolor)'
        document.querySelector('#menu-hamb i').style.color = 'var(--blackcolor)'
        document.querySelector('form>button').style.color = 'var(--blackcolor)'
    } else if (corTema == '#ffff7a' || corTema == 'yellow') {
        document.querySelectorAll('.info-projects>a>button').forEach(btn => btn.style.color = 'var(--blackcolor)')
        document.querySelectorAll('.info-projects>a>button').forEach(btn => btn.style.border = '')
        document.querySelector('#btnColor i').style.color = 'var(--blackcolor)'
        document.querySelector('#menu-hamb i').style.color = 'var(--blackcolor)'
        document.querySelector('form>button').style.color = 'var(--blackcolor)'
    } else {
        document.querySelectorAll('.info-projects>a>button').forEach(btn => btn.style.color = 'var(--whitecolor)')
        document.querySelectorAll('.info-projects>a>button').forEach(btn => btn.style.border = '')
        document.querySelector('#btnColor i').style.color = 'var(--whitecolor)'
        document.querySelector('#menu-hamb i').style.color = 'var(--whitecolor)'
        document.querySelector('form>button').style.color = 'var(--whitecolor)'
    }
}

//FUNÇÃO PARA SALVAR A COR, ATÉ QUE O USUÁRIO ESCOLHA OUTRA COR
function salvarCor() {
    const corSalva = localStorage.getItem('portfolioThemeColor')
    if (corSalva) {
        mudarCor(corSalva)
    }
    else {
        mudarCor('#002aff')
    }
}

salvarCor()
