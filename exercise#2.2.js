/*
2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

Array de teste: [2, 3, 6, 7, 10, 1];.

Valor esperado no retorno da função: 4.
*/
let teste = [2, 3, 6, 7, 10, 1];

console.log(checkArray(teste));

function checkArray(array) {
    let posicaoMaior = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (array[i + 1] > array[i]) {
            posicaoMaior = i + 1;
        }
    }
    return posicaoMaior;
}
