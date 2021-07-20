function AcaoBotao(){
var valor1, valor2, resultado, operacao;
valor1= prompt("Coloque o primeiro valor: ")
operacao= prompt("Coloque a operacao, ex: +, -, x, /: ")
valor2= prompt("Coloque o segundo valor: ")
    if(operacao == "+"){
        resultado = parseInt(valor1) + parseInt(valor2)
    } else if(operacao == "-"){
        resultado = parseInt(valor1) - parseInt(valor2)
    } else if(operacao == "x"){
        resultado = parseInt(valor1) * parseInt(valor2)
    } else if(operacao == "/"){
        resultado = parseInt(valor1) / parseInt(valor2)
    }
    document.getElementById("paragrafo").innerText = resultado
}