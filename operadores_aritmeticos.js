/*
   resultado, valor01, valor02, valor03, valor04: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval ("escreva o valor01:")
   leia (valor01)
   escreval ("escreva o valor02: ")
   leia (valor02)
   escreval ("escreva o valor03: ")
   leia (valor03)
   escreval ("escreva o valor04: ")
   leia (valor04)
   resultado := ((valor01 + valor02) * valor03)/ valor04
   escreval ("esse é o resultado: ", resultado)
*/
var resultado, valor01, valor02, valor03, valor04;
valor01 = prompt("escreva o valor 1")
valor02 = prompt("escreva o valor 2")
valor03 = prompt("escreva o valor 3")
valor04 = prompt("escreva o valor 4")
resultado = ((parseInt(valor01)+parseInt(valor02))*parseInt(valor03))/parseInt(valor04);
alert ("esse e o resultado: "+ resultado)