//PRECISO QUE O RELÓGIO IMPRIMA O HORÁRIO ATUAL NO CAMPO 'p' DO HTML, EM TEMPO REAL.
let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let relogioAnalogico = document.getElementById('horario')
relogioAnalogico.innerHTML = `${hour}:${minutes}:${seconds}`;







