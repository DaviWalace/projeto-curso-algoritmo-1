function AcaoBotao(){
    var valor1, valor2, resultado, operacao;
    valor1= prompt("Coloque o primeiro valor: ")
    operacao= prompt("Coloque a operacao, ex: +, -, x, /: ")
    valor2= prompt("Coloque o segundo valor: ")
       
    switch (operacao) {
        case "+":
        resultado = parseInt(valor1) + parseInt(valor2)   
            break;
         case "-":
         resultado = parseInt(valor1) - parseInt(valor2)   
         break;
         case "x":
         resultado = parseInt(valor1) * parseInt(valor2)   
         break;
         case "/":
         resultado = parseInt(valor1) / parseInt(valor2)   
         break;
        }
        document.getElementById("paragrafo").innerText = resultado
}