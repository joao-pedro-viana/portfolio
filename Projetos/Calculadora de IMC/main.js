function calcularIMC(){

const peso = parseFloat(document.getElementById('fpeso').value)
const altura = parseFloat(document.getElementById('faltura').value)
const IMC = peso / (altura**altura)
let result = document.getElementById('valorIMC')
let classif = document.querySelector('section#classif')
let alerta = document.querySelector('section#alerta')


    result.innerHTML = ` ${IMC}` 
    document.querySelector('#classif').style.display = 'block'

    if (IMC < 18.5){
        classif.innerHTML = `Abaixo do peso!`
        alerta.innerHTML = `Parabéns!`
    }

    else if (IMC > 18.5 && IMC < 24.9){
        classif.innerHTML = `Peso normal!`
        alerta.innerHTML = `Muito bem! Continue assim!`
    }

    else if(IMC > 24.9 && IMC < 29.9){
        classif.innerHTML = `  Pré-Obeso!`
        alerta.innerHTML = `Pratique um pouco de exercícios físicos`
    }
    
    else if(IMC > 29.9 && IMC < 34.9){
        classif.innerHTML = `  Obesidade I`
        alerta.innerHTML = `Estado Crítico I`
    }
    
    else if(IMC > 34.9 && IMC < 39.9){
        classif.innerHTML = `  Obesidade II`
        alerta.innerHTML = `Estado Crítico II.`
    }
    
    else{
        classif.innerHTML = `Obesidade III`
        alerta.innerHTML = `Estado Crítico Avançado`
    }
}

function limpar(){
    document.getElementById('fpeso').value = '';
    document.getElementById('faltura').value = '';
    document.getElementById('valorIMC').innerHTML = '';
    document.querySelector('#classif').style.display = 'none';
    document.querySelector('#alerta').style.display = 'none';
    document.querySelector('#alerta').innerHTML = '';
    document.querySelector('#classif').innerHTML = '';
}

function calcularIMC(){

const peso = parseFloat(document.getElementById('fpeso').value)
const altura = parseFloat(document.getElementById('faltura').value)
const IMC = peso / (altura**altura)
let result = document.getElementById('valorIMC')
let classif = document.querySelector('section#classif')
let alerta = document.querySelector('section#alerta')


    result.innerHTML = ` ${IMC}` 
    document.querySelector('#classif').style.display = 'block'

    if (IMC < 18.5){
        classif.innerHTML = `Abaixo do peso!`
        alerta.innerHTML = `Parabéns!`
    }

    else if (IMC > 18.5 && IMC < 24.9){
        classif.innerHTML = `Peso normal!`
        alerta.innerHTML = `Muito bem! Continue assim!`
    }

    else if(IMC > 24.9 && IMC < 29.9){
        classif.innerHTML = `  Pré-Obeso!`
        alerta.innerHTML = `Pratique um pouco de exercícios físicos`
    }
    
    else if(IMC > 29.9 && IMC < 34.9){
        classif.innerHTML = `  Obesidade I`
        alerta.innerHTML = `Estado Crítico I`
    }
    
    else if(IMC > 34.9 && IMC < 39.9){
        classif.innerHTML = `  Obesidade II`
        alerta.innerHTML = `Estado Crítico II.`
    }
    
    else{
        classif.innerHTML = `Obesidade III`
        alerta.innerHTML = `Estado Crítico Avançado`
    }
}

function limpar(){
    document.getElementById('fpeso').value = '';
    document.getElementById('faltura').value = '';
    document.getElementById('valorIMC').innerHTML = '';
    document.querySelector('#classif').style.display = 'none';
    document.querySelector('#alerta').style.display = 'none';
    document.querySelector('#alerta').innerHTML = '';
    document.querySelector('#classif').innerHTML = '';
}

