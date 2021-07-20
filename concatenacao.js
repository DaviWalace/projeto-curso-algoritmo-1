/*
  nome: caracter
   pontuacao: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("escreva o seu nome: ")
   leia(nome)
   escreval("digite a melhor pontuacao:")
   leia(pontuacao)

   escreval(nome," : ", pontuacao)
*/

var nome, pontuacao;
nome= prompt("Escreva o seu nome")
pontuacao= prompt("Escreva a sua pontuacao")
document.getElementById("paragrafo").innerText = nome + (" : ") + pontuacao