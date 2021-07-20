
var nome, nota01, nota2, passou;
    passou = false;
    nome =prompt("Escreva o seu nome:")
    nota01=prompt("Escreva a nota da primeira prova:")
    nota02=prompt("Escreva a nota da segunda prova:")
media = (parseInt(nota01) + parseInt(nota02))/ 2;
if(media >= 5)
    passou = true;
if(!passou){
    alert("Infelizmente voce reprovou.")
}   
else
    alert("Parabens, voce passou!")