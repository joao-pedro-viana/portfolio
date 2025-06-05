function adicionarTarefaManha(){
    const tarefa = document.querySelector('.tarefaAddManha').value 
    const tarefaAdicionada = document.querySelector('p.tarefaManha')
    tarefaAdicionada.innerHTML += `<input type="checkbox"><li>${tarefa}</li>`
}

function adicionarTarefaTarde(){
    const tarefa = document.querySelector('.tarefaAddTarde').value 
    const tarefaAdicionada = document.querySelector('p.tarefaTarde')
    tarefaAdicionada.innerHTML += `<input type="checkbox"><li>${tarefa}</li>`
}

function adicionarTarefaNoite(){
    const tarefa = document.querySelector('.tarefaAddNoite').value 
    const tarefaAdicionada = document.querySelector('p.tarefaNoite')
    tarefaAdicionada.innerHTML += `<input type="checkbox"><li>${tarefa}</li>`
}

function limpar(){
    document.querySelector('.tarefaAddManha').value = ''
    document.querySelector('p.tarefaManha').innerHTML = ''
    document.querySelector('.tarefaAddTarde').value = ''
    document.querySelector('p.tarefaTarde').innerHTML = ''
    document.querySelector('.tarefaAddNoite').value = ''
    document.querySelector('p.tarefaNoite').innerHTML = ''
}

//FUNÇÃO EXCLUIR, QUE SÓ FUNCIONA QUANDO O CHECKBOX ESTÁ MARCADO
function excluir(){
  
}

    

