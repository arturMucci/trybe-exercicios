/*
6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], cont = numbers.length, odd = 0;


for (let i = 0; i < cont; i += 1) {
    if (numbers[i] % 2 !== 0 && numbers [i] !== 0) {
        odd += 1;
    }
}

if (odd === 0) {
    console.log('Nenhum valor ímpar encontrado!');
} else {
    console.log('O array possui', odd, 'números ímpares.');
}