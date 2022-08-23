/*
3 - Considere o array de strings abaixo:

Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
*/
let array = ['java', 'javascript', 'python', 'html', 'css'], len = 0, maiorValor = '', menorValor = array[0];

for (let i = 0; i < array.length; i += 1) {
    if(array[i].length > maiorValor.length) {
        maiorValor = array[i];
    }

    if (array[i].length < menorValor.length) {
        menorValor = array[i];
    }
}

console.log(maiorValor, menorValor);
