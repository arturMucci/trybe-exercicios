/*
Bonus 1 - Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
*/
let n = 5, linha = '';

for (let i = 0; i < n; i += 1) {
    linha = '';
    for (j = 0; j < n; j += 1) {
        linha += '*';
    }
    console.log(linha);
}
