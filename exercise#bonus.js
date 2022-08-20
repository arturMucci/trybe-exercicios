/*
Bonus - Para os próximos dois exercícios leia este artigo e tente entender o que está acontencedo no código abaixo:

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (array[index] < array[secondIndex]) {
            let position = array[index];
            array[index] = array[secondIndex];
            array[secondIndex] = position;
        }
    }
}

Com base na leitura que fez, considere o array numbers abaixo e faça os exercícios:
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], newNumbers = [];
/* 
1 - Ordene o array numbers em ordem crescente e imprima seus valores;
2 - Ordene o array numbers em ordem decrescente e imprima seus valores;
3 - Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:
*/
/* Ordem crescente.
numbers.sort(function(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

console.log(numbers);
*/
/* Ordem descrescente.
numbers.sort(function(a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
});

console.log(numbers);
*/
for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i+1] !== undefined) {
        newNumbers.push(numbers[i] * numbers[i+1]);
    } else if (numbers[i+1] === undefined) {
        newNumbers.push(numbers[i] *2);
    }
}

console.log(numbers);
console.log(newNumbers);
