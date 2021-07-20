/*escreval("Escreva o nome do aluno:")
   leia (nome)
   escreval ("Escreva a nota da primeira prova:")
   leia (nota01)
   escreval ("Escreva a nota da segunda prova:")
   leia (nota02)
   media := (nota01 + nota02) / 2
   se media >= 5 entao
   escreval("Aprovado", nome)
   senao
   escreval("Reprovado ", nome)
   fimse*/
  
   var nome, nota01, nota02;
   nome= prompt("Escreva o nome do aluno:")
   nota01= prompt("Escreva a nota a primeira nota:")
   nota02= prompt("Escreva a nota da segunda prova:")

   media= (parseInt(nota01) + parseInt(nota02)) / 2;

   if(media >= 5 <=11){
      alert("Aprovado! "+ nome)
   }
   else
      alert("Reprovado! "+ nome)  