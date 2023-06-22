var lamp = window.document.getElementById('lampadaDesligada')

function estaQuebrada () {
    return lamp.src.indexOf('quebrada') > -1
}

function Ligar(){
    if (!estaQuebrada()) {
    lamp.src = '/assets/lampada-ligada.svg'}
}

function Desligar(){
    if(!estaQuebrada()) {  
    lamp.src = '/assets/lampada-desligada.svg'}
}

lamp.addEventListener('click', Quebrar)

function Quebrar(){
    lamp.src = '/assets/quebrada.png'
}