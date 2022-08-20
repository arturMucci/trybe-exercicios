/* 
3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], cont = numbers.length, soma = 0, media;

for (let i = 0; i < cont; i += 1) {
    soma = soma + numbers[i];
}

media = soma / cont;

console.log(media);