const ano = new Date(); 
const anoAtual = ano.getFullYear(); //PEGA O ANO ATUAL
document.querySelector('.ano-atual').innerHTML = `${anoAtual}`; //IMPRIME O ANO ATUAL NO RODAPÉ

const addBtn = document.querySelector('.add');
const resetBtn = document.querySelector('.reset');
const secaoTarefa = document.querySelector('.itens');

addBtn.addEventListener('click', adicionarTarefa); //ADICIONA A TAREFA
resetBtn.addEventListener('click', () => secaoTarefa.innerHTML = ''); //RESETA O CAMPO DE TAREFAS

function adicionarTarefa() {
    const valor = document.getElementById('addTarefa').value.trim();
    if (valor === '') return;

    const li = document.createElement('li');
    li.classList.add('tarefa');
    li.textContent = valor.toUpperCase();
    li.style.backgroundColor = 'green'

    // Criando os ícones (editar, salvar, excluir)
    const iconesDiv = document.createElement('div');
    iconesDiv.classList.add('icones');

    const editar = document.createElement('img');
    editar.src = './icones/edit-2.svg';
    editar.alt = 'editar';
    editar.title = 'Editar';

    const salvar = document.createElement('img');
    salvar.src = './icones/check.svg';
    salvar.alt = 'salvar';
    salvar.title = 'Salvar';
    salvar.style.display = 'none';

    const deletar = document.createElement('img');
    deletar.src = './icones/trash-2.svg';
    deletar.alt = 'deletar';
    deletar.title = 'Excluir';

    iconesDiv.append(editar, salvar, deletar);
    li.appendChild(iconesDiv);
    secaoTarefa.appendChild(li);

    document.getElementById('addTarefa').value = '';

    // Eventos dos botões
    editar.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = li.firstChild.textContent;
        li.insertBefore(input, iconesDiv);
        li.firstChild.remove();
        editar.style.display = 'none';
        salvar.style.display = 'inline';
    });

    salvar.addEventListener('click', () => {
        const texto = li.querySelector('input').value.trim().toUpperCase();
        if (texto === '') return;
        const novoTexto = document.createTextNode(texto);
        li.insertBefore(novoTexto, iconesDiv);
        li.querySelector('input').remove();
        editar.style.display = 'inline';
        salvar.style.display = 'none';
    });

    deletar.addEventListener('click', () => {
        li.remove();
    });
}
