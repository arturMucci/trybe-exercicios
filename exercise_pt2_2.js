let longestWord = 'Antônio foi ao banheiro e não sabemos o que aconteceu'; // retorna 'aconteceu'

const returnLongestWord = (arrayString) => {
  let maior = '';
  arrayString.forEach(element => {
    if (element.length > maior.length) {
      maior = element;
    }
  });
  return maior;
}

console.log(returnLongestWord(longestWord.split(' ')));
