function escolherCores() {
    const paleta = document.querySelector('.paleta-de-cores');
    //ALTERNA A VISIBILIDADE DA PALETA DE CORES
    paleta.style.display = (paleta.style.display == 'none') || paleta.style.display == '' ? 'block' : 'none';
}

function mudarCor(cor) {
    //ALTERA A COR DE ALGUNS ELEMENTOS
    document.querySelector('h1').style.color = cor;
    document.querySelector('.apresentacao').style.color = cor;
    document.querySelector('.botao-cor').style.backgroundColor = cor;
    document.querySelector('.em-breve').style.backgroundColor = cor;
    document.querySelector('.botao-cor').style.boxShadow = `0 0 1rem ${cor}`;
    document.querySelector('.fotoPerfil').style.boxShadow = `0px 0px 3rem ${cor}`;
    document.querySelector('p.cabecalho-subtitulo').style.borderBottom = `4px solid ${cor}`;
    document.querySelector('p.cabecalho-subtitulo').style.textShadow = `2px 0 3px ${cor}`

    const botaoAcessarProjeto = document.querySelectorAll('.acessar-projeto');
    botaoAcessarProjeto.forEach(botaoAcessar => {
        botaoAcessar.style.backgroundColor = cor;
    })

    //ALTERA A COR DO BOTÃO HAMBURGUER, NOS CELULARES
    document.querySelector('.botao-hamburguer').style.backgroundColor = cor;
    document.querySelector('.botao-hamburguer').style.borderColor = cor;

    //ALTERA A CORES (LUZES) DE FUNDO DO BODY, EXCETO AS PRETAS
    document.querySelector('.particulas').style.background = `radial-gradient(circle at 10% 24%, ${cor} 0%, transparent 10%), radial-gradient(circle at 90% 80%, ${cor} 0%, transparent 10%)`;
    document.querySelector('.particulas2').style.background = `radial-gradient(circle at 80% 24%, #000000 0%, transparent 15%), radial-gradient(circle at 20% 74%, #000000 0%, transparent 10%)`;

    //ALTERA A COR DO BOTÃO DE FORMULÁRIO
    document.querySelector('.botao-form').style.backgroundColor = cor;
    document.querySelectorAll('.campos-formulario').forEach(campo => {
        campo.style.borderColor = cor;
        campo.style.color = cor;
    });

    //ALTERA A COR DO TEXTO DO BOTÃO DE FORMULÁRIO, CASO FIQUE BRANCA OU AMARELA
    const botaoForm = document.getElementById('botao-form');
    const botaoAcesso = document.querySelectorAll('.acessar-projeto')

    if (botaoForm.style.backgroundColor == 'white' || botaoForm.style.backgroundColor == 'yellow' || botaoForm.style.backgroundColor == `rgb(253, 255, 129)`) { //OPÇÕES BRANCO, AMARELO OU AMARELO CLARO
        botaoForm.style.color = 'black';
        botaoAcesso.forEach(botaoAcessoProjeto => {
            botaoAcessoProjeto.style.backgroundColor = cor;
            botaoAcessoProjeto.style.color = 'black';
        })
    }
    else {
        botaoForm.style.color = 'white';
        botaoAcesso.forEach(botaoAcessarProjeto2 => {
            botaoAcessarProjeto2.style.color = 'white';
        })
    }

    //Alterar todos os Hovers e Focus agora 
    //ALTERA A COR DOS ITENS DO CABEÇALHO DO MENU

    document.querySelectorAll('.menu-link').forEach(itemMenu => {
        itemMenu.addEventListener('mouseenter', function () {
            this.style.color = cor;
            document.documentElement.style.setProperty('--primaria', `${cor}`);
        })

        itemMenu.addEventListener('mouseleave', function () {
            this.style.color = '';
        })

    //ALTERA A COR DA BARRINHA DOS ITENS DO MENU QUANDO O MOUSE PASSA POR ELE

    const barrinha = document.querySelector('.menu-link');
    barrinha.addEventListener('mouseenter', function () {
            this.style.setProperty('--primaria', `${cor}`);
        })

    barrinha.addEventListener('mouseleave', function () {
            this.style.setProperty('--primaria', '');
        })
    });

    document.querySelectorAll('.redes-sociais-texto').forEach(itemMenu => {
        itemMenu.addEventListener('mouseenter', function () {
            this.style.color = cor;
            this.style.setProperty('color', `${cor}`);
            this.style.setProperty('width', '100%');
        })

        itemMenu.addEventListener('mouseleave', function () {
            this.style.color = '';
            this.style.setProperty('width', '100%');
            this.style.setProperty('color', '');
        })
    });

    document.querySelectorAll('.projetos-card').forEach(caixa => {
        caixa.addEventListener('mouseenter', function () {
            this.style.boxShadow = `0 0rem 1rem 0 ${cor}`;
            this.style.setProperty('width', '');
        })

        caixa.addEventListener('mouseleave', function () {
            this.style.boxShadow = '';
            this.style.setProperty('width', '');
            this.style.setProperty('color', '');
        })
    });

    //ALTERA A COR DO CAMPO DO FORMULARIO, QUANDO FOCADO
    document.querySelectorAll('.campo-form').forEach(campo => {
        campo.addEventListener('focus', function () {
            this.style.boxShadow = `0 0 1.5rem ${cor}`;
        })

        campo.addEventListener('blur', function () {
            this.style.boxShadow = '';
        })
    })
}

//FUNÇÃO PARA EXIBIR O MENU, NO CELULARES, QUANDO CLICADO NO BOTÃO HAMBURGUER
function exibirItens(){
    let menuMobile = document.querySelector('.menu');
    menuMobile.style.display = (menuMobile.style.display == 'none') || menuMobile.style.display == '' ? 'block' : 'none';

//ALTERNA PARA SÍMBOLO 'X' E 'HAMBURGUER', QUANDO O MENU ESTÁ VISÍVEL
    if(menuMobile.style.display == 'block'){
        document.querySelector('.botao-hamburguer').style.backgroundImage = 'url("image/Transparent_X.png")';
    }
    else{
        document.querySelector('.botao-hamburguer').style.backgroundImage = 'url("contatos/menu.svg")';
    }
}

//FUNÇÃO PARA MOSTRAR OS PROJETOS A MAIS, QUANDO O USUÁRIO CLICA NO BOTÃO
function mostrarProjetos(){
    const projetos = document.querySelector('.mais-projetos');
    const botao = document.querySelector('.ver-mais');
    projetos.style.display = (projetos.style.display == 'none') || projetos.style.display == '' ? 'flex' : 'none';

    if(projetos.style.display == 'none'){
        botao.innerHTML = 'Ver Mais';
    }
    else{
        botao.innerHTML = 'Ver Menos';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const coresDisponiveis = [ //ARRAY DAS CORES DISPONÍVEIS PARA ESCOLHA ALEATÓRIA
        'yellow',
        '#00a2ff', 
        '#ff008c',
        'white'
    ];

        const corAleatoria = coresDisponiveis[Math.floor(Math.random() * coresDisponiveis.length)];
        mudarCor(corAleatoria);
});