/*
  nome: caractere
   idade, contador, limite: inteiro
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("digite quantas vezes quer verificar: ")
   leia(limite)
   contador := 0
   enquanto contador < limite faca
   escreva("coloque o nome do usuario: ")
   leia(nome)
   escreva("escreva a idade do usuario: ")
   leia(idade)
   se idade => 18 entao
   escreval("o usuario e maior de idade!")
   senao
   escreval("o usuario e menor de idade.")
   fimse
   contador := contador + 1
   fimenquanto
*/
function AcaoBotao() {
    
}
var idade, nome, contador, limite;
limite = prompt ("quantas vezes quer repetir? ")
contador = 0
while (contador < limite) {
nome = prompt("qual e o nome do usuario:" )
idade = prompt("qual e a sua idade: ")
if (idade => 18) 
    document.getElementById("paragrafo").innerText = nome + ", voce e maior de idade!"

else (idade < 18)
    document.getElementById("paragrafo").innerText = nome + ", voce e maior de idade!"
    contador++
}    