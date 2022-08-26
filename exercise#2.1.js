/*
1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
Exemplo de palíndromo: arara.
verificaPalindrome('arara');
Retorno esperado: true
verificaPalindrome('desenvolvimento');
Retorno esperado: false
*/

let palavra = 'natan';

console.log(checkPalindrom(palavra));

function checkPalindrom(palavra) {
  let palindrom = '';
  for (let i = palavra.length - 1; i >= 0; i -= 1) {
    palindrom += palavra[i];
  }
  if (palindrom === palavra) {
    return true;
  } else if (palindrom !== palavra) {
    return false;
  }
}
