/*
 contador, numero, factorial: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   escreva ("Digite o numero para factoriar: ")
   leia (numero)
   factorial:= 1
   para contador de 1 ate numero faca
   factorial:= contador * factorial
   fimpara
   escreva ("O factorial de ", numero, " e: ", factorial)
*/
function AcaoBotao() {
    
var numero, factorial;
numero = prompt("Digite o numero para factoriar: ")
factorial = 1
for ( var contador = 1; contador <= numero; contador++) {
factorial = factorial * contador   
}
document.getElementById("paragrafo").innerText = "O factorial de " + numero + " e: " + factorial
}