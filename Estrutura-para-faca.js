
function AcaoBotao() {
    
var numero, factorial;
numero = prompt("Digite o numero para factoriar: ")
factorial = 1
for ( var contador = 1; contador <= numero; contador++) {
factorial = factorial * contador   
}
document.getElementById("paragrafo").innerText = "O factorial de " + numero + " e: " + factorial
}