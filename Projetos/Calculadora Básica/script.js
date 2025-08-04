/* Preciso que os conteúdos dos botões clicados sejam exibidos na tela
de rascunho */
const botoes = document.querySelectorAll('.botao')
const rascunho =  document.querySelector('.rascunho')
const resultado = document.querySelector('.resultado-final')
const porcentagem = document.getElementsByName('porcentagem').value / 100
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        rascunho.innerHTML += botao.innerHTML
    })
})

//Preciso que o botão de resetar zere todo o conteúdo do rascunho
function resetar() {
    rascunho.innerHTML = ''
    resultado.innerHTML = ''
}

//Preciso que o botão remove um digito errado
function apagarDigito() {
    rascunho.innerHTML = rascunho.innerHTML.slice(0, -1)
}

/* Quero que a calculadora faça as operações matemáticas básicas
  OBS: O resultado final deve aparecer na tela do resultado final, 
  e o conteúdo do rascunho deve ser mantido */
function calcular() {
    const rascunhoFinal = document.querySelector('.rascunho').innerText

    try {
    const resultadoFinal = eval(rascunhoFinal);
    document.querySelector('.resultado-final').innerText = resultadoFinal
    }
    catch (e) {
        document.querySelector('.resultado-final').innerText = 'ERRO!'
    }
}

    rascunho.innerHTML = rascunho.innerHTML.slice(0, -1)
}

