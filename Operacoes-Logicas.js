/*
Var
// Seção de Declarações das variáveis
   nome: caractere
   nota01, nota02, media: real
   passou: logico
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   passou := falso
   escreval("Escreva o nome do aluno:")
   leia (nome)
   escreval ("Escreva a nota da primeira prova:")
   leia (nota01)
   escreval ("Escreva a nota da segunda prova:")
   leia (nota02)
   media := (nota01 + nota02) / 2

   se media >= 5 entao
   passou:= verdadeiro
   fimse
   
   se passou entao
   escreval("Aprovado! ", nome)
   senao
   escreval("Reprovado! ", nome)
   fimse
*/

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