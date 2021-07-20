
function AcaoBotao() {
    var sairloop, numero1, numero2;
do{
numero1= prompt("digite o primeiro valor: ")
numero2= prompt("digite o segundo valor: ")    
document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt( numero1 ) + parseInt( numero2 ) )
sairloop= prompt("deseja sair? SIM/NAO: ")

}while (sairloop == "NAO")
    
}