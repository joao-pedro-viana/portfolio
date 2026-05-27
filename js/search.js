//FUNÇÃO QUE PESQUISA OS ELEMENTOS
const searchBar = document.getElementById('pesquisaProj')
const searchLupa = document.getElementById('searchProj')

searchLupa.addEventListener('click', pesquisarItem)

function pesquisarItem() {
    const valor = formatText(searchBar.value)
    const projetos = document.querySelectorAll('.my-projects div')
    const noResults = document.querySelector('.no_results')
    let hasResults = false

    projetos.forEach(projeto => {
        const projectTitle = projeto.querySelector('h3').textContent
        const projectDescription = projeto.querySelector('p').textContent

        if (formatText(projectTitle).indexOf(valor) !== -1 || formatText(projectDescription).indexOf(valor) !== -1) {
            projeto.style.display = 'flex';
            hasResults = true
        }

        else {
            projeto.style.display = 'none'
            noResults.style.display = 'flex';
        }
    })

    if (hasResults) {
        noResults.style.display = 'none'
    }

    else {
        noResults.style.display = 'block'
    }
}

function formatText(valor) {
    return valor
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
}


