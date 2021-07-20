
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