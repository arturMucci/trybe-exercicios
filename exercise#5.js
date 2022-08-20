/*
5 - Utilizando for, descubra qual o maior valor contido no array e imprima-o;
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], cont = numbers.length, maior = 0;


for (let i = 0; i < cont; i += 1) {
    if (numbers[i] > maior) {
        maior = numbers[i];
    }
}

console.log('O maior número é: ',maior);