/*
6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5.
Valor esperado no retorno da função: 1+2+3+4+5 = 15.
*/

let n = 7;

function retornaSomatorio(n) {
  let somatorio = 0;
  for (let index = n; index > 0; index -= 1) {
    somatorio += index;
  }
  return somatorio;
}

console.log(retornaSomatorio(n));
