/*
3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

Array de teste: [2, 4, 6, 7, 10, 0, -3];.

Valor esperado no retorno da função: 6.
*/
let teste = [2, 4, 6, 7, 10, 0, -3];

console.log(checkArray(teste));

function checkArray(array) {
    let posicaoMenor = array[4];
    for (let i = 0; i < array.length; i += 1) {
        if (array[i + 1] < array[i]) {
            posicaoMenor = i + 1;
        }
    }
    return posicaoMenor;
}
