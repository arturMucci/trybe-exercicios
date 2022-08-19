/*
7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F

O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/
let rate = 87, rank='';

if (rate >= 90) {
    rank = 'a';
} else if (rate < 90 && rate >= 80) {
    rank = 'b';
}  else if (rate < 80 && rate >= 70) {
    rank = 'c';
}  else if (rate < 70 && rate >= 60) {
    rank = 'd';
}  else if (rate < 60 && rate >= 50) {
    rank = 'e';
}  else if (rate < 50) {
    rank = 'f';
}
console.log('Sua nota é: ', rank);
