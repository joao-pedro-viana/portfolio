//FUNÇÃO DE MOSTRAR OS PROJETOS
const campoProject = document.querySelector('.my-projects');
const project = [
        {
            nome: 'Calculadora de IMC',
            descricao: 'Calculadora que fornece o Índice de Massa Corporal (IMC).',
            imagem: './projetos/CalculadoraIMC/CalculadoraIMC.png',
            link: './projetos/CalculadoraIMC/index.html',
        },
        {
            nome: 'Calculadora Básica',
            descricao: 'Calculadora que realiza operações matemáticas.',
            imagem: './projetos/CalculadoraBasica/image/CalculadoraBasica.png',
            link: './projetos/CalculadoraBasica/index.html'
        },
        {
            nome: 'Estágio na Secretaria de Turismo em Pirassununga',
            descricao: 'Estágio na Secretaria de Turismo de Pirassununga - Continuidade, Manutenção e Atualizações do Site do Turismo de Pirassununga',
            imagem: './projetos/Setor de Turismo de Pirassununga/SecturPira.png',
            link: 'https://turismo.pirassununga.sp.gov.br'
        },
        {
            nome: 'Adivinhador de Número',
            descricao: 'Tente adivinhar um número sorteado.',
            imagem: './projetos/Adivinhador de Número/AdivNum.png',
            link: './projetos/Adivinhador de Número/index.html'
        }
    ]
function renderizarProjetos() {

    campoProject.innerHTML = '';

    let html = ''

    project.forEach(element => {
        let corTema = document.getElementById('btnColor').style.backgroundColor
        html +=
            `<div class="card-project">
                <img src="${element.imagem}" alt="${element.nome}">
                <div class="info-projects">
                    <h3>${element.nome}</h3>
                    <details>
                        <p>${element.descricao}</p>
                    </details>
                    <a href="${element.link}" target="_blank">
                        <button style="background-color: ${corTema}; box-shadow: 0 0 1rem 0.1rem ${corTema};
                        color: var(--blackcolor); border: 3px solid ${corTema};">Acesse aqui</button>
                    </a>
                </div>
        </div>`;
    })

    campoProject.innerHTML = html

    //FUNÇÃO QUE EXIBE MODAL DE CADA PROJETO
    const projeto = document.querySelectorAll('.card-project')

    function mostrarModal(event) {
        const imgElement = event.currentTarget.querySelector('img');
        const srcDaImagem = imgElement.src;
        const titulo = event.currentTarget.querySelector('h3')
        const descricao = event.currentTarget.querySelector('details p');
        const link = event.currentTarget.querySelector('a');
        const linkModal = link.href;

        let modal = document.createElement('div');
        let imagem = document.createElement('img');
        let button = document.createElement('button');
        let campo = document.createElement('section');
        let btnLink = document.createElement('a');

        imagem.src = srcDaImagem;
        btnLink.href = linkModal;
        btnLink.target = "_blank";

        modal.classList.add('modalProjeto');
        btnLink.classList.add('btnLink');
        modal.appendChild(imagem);
        modal.appendChild(button);
        modal.appendChild(campo);
        modal.appendChild(btnLink);

        button.innerHTML = '<i class="fa-solid fa-close"></i>';

        button.onclick = () => modal.remove();


        campo.innerHTML += `${titulo.textContent} <br><br>`
        campo.innerHTML += descricao.textContent

        btnLink.innerText = 'Acesse'

        document.querySelector('.my-projects').appendChild(modal);
    }

    projeto.forEach(proj => proj.addEventListener('click', mostrarModal))
}

document.addEventListener('DOMContentLoaded', renderizarProjetos)
