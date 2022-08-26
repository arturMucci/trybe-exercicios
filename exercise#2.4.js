/*
4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

Valor esperado no retorno da função: Fernanda.
*/
let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(checkArray(nomes));

function checkArray(array) {
  let maiorNome = '';
  for (let i = 0; i < array.length; i += 1) {
    let teste = array[i];
    if (teste.length > maiorNome.length) {
      maiorNome = array[i];
    }
  }
  return maiorNome;
}
