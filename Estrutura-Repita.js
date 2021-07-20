/*
 sairloop: caracter
   numero1, numero2, resultado: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   repita
   escreva("digite o primeiro valor: ")
   leia(numero1)
   escreva("digite o segundo valor: ")
   leia(numero2)
   escreval("o valor e ", numero1 + numero2)
   escreva ("deseja sair? SIM/NAO: ")
   leia(sairloop)
   ate sairloop <> "NAO"
*/
function AcaoBotao() {
    var sairloop, numero1, numero2;
do{
numero1= prompt("digite o primeiro valor: ")
numero2= prompt("digite o segundo valor: ")    
document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt( numero1 ) + parseInt( numero2 ) )
sairloop= prompt("deseja sair? SIM/NAO: ")

}while (sairloop != "NAO")
    
}