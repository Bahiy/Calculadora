let soma = document.querySelector('#somar');
let subtracao = document.querySelector('#subtrair');
let multiplicacao = document.querySelector('#multiplicar');
let divisao = document.querySelector('#divisao');
let potencia = document.querySelector('#potencia');
let resultado = document.querySelector('.resposta')
let texto1 = document.querySelector('#numero1')
let texto2 = document.querySelector('#numero2')

soma.addEventListener('click' || TouchEvent, (adicao))
subtracao.addEventListener('click', (subtrair))
multiplicacao.addEventListener('click', (multiplicar))
divisao.addEventListener('click', (dividir))
potencia.addEventListener('click', (potenciacao))

function adicao() {
   let numero1 = Number(texto1.value)
   let numero2 = Number(texto2.value)
   let soma = numero1 + numero2;
   resultado.innerHTML = soma;
}
function subtrair() {
   let numero1 = Number(texto1.value)
   let numero2 = Number(texto2.value)
   let soma = numero1 - numero2;
   resultado.innerHTML = soma;
}
function multiplicar() {
   let numero1 = Number(texto1.value)
   let numero2 = Number(texto2.value)
   let multiplicar = numero1 * numero2;
   resultado.innerHTML = multiplicar;
}
function dividir() {
   let numero1 = Number(texto1.value)
   let numero2 = Number(texto2.value)
   let dividir = numero1 / numero2;
   resultado.innerHTML = dividir;
}
function potenciacao() {
   let numero1 = Number(texto1.value)
   let numero2 = Number(texto2.value)
   let potencia = numero1 ** numero2;
   resultado.innerHTML = potencia;
}
