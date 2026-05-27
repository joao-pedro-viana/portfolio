const sorteador = document.querySelector('.random')
const reset = document.querySelector('.reset')
const tenta = document.querySelector('.try')
let numMax, numMin, numSort, numPalpite

//SORTEIA O NÚMERO
function sortearNumero() {
    const numMax = Number(document.getElementById('max').value)
    const numMin = Number(document.getElementById('min').value)
    let numSort = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;

    if (numMax == numMin || numMin == '' || numMax == '') {
        setTimeout(() => {
            document.getElementById('alert').innerHTML = 'Não foi possível sortear!'

            setTimeout(() => document.getElementById('alert').innerHTML = '',
                2000)
        })
    } else {
        console.log(numSort)
    }

    setTimeout(() => {
        document.getElementById('alert').textContent = 'Número sorteado.'

        setTimeout(() => document.getElementById('alert').innerHTML = '',
        2000)
    })

    //TENTA ACERTAR O NÚMERO
    function tentaAdivinhar() {
        let numPalpite = Number(document.getElementById('palpite').value)

        if (numPalpite == numSort) {
            setTimeout(() => {
                alert(`Parabéns, acertou o número ${numSort}`)

                setTimeout(() => 2000)
            })
        }

        else if (numPalpite < numSort) {
            setTimeout(() => {
                document.querySelector('.dica').innerHTML = 'O número é maior.';

                setTimeout(() => document.querySelector('.dica').innerHTML = '',
                    2000)
            })
        }

        else {
            setTimeout(() => {
                document.querySelector('.dica').innerHTML = 'O número é menor.';

                setTimeout(() => document.querySelector('.dica').innerHTML = '',
                    2000)
            })
        }
    }

    tenta.addEventListener('click', tentaAdivinhar)
}

sorteador.addEventListener('click', sortearNumero)

//RESETA TUDO
function resetar() {
    document.querySelectorAll('.numeros>input').forEach(input => { input.value = '' })
    document.querySelectorAll('.more, .less').forEach(dica => dica.innerHTML = '')
    document.getElementById('palpite').value = '';
    console.log('')
}

reset.addEventListener('click', resetar)


//RODAPÉ
const ano = new Date()
const anoAtual = ano.getFullYear()
const rodape = document.querySelector('footer>span')

rodape.innerHTML = anoAtual