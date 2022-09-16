const oddsAndEvens = [13, 3, 4, 10, 7, 2];

function compararNumeros(a, b) {
  return a - b;
}

const sortOddsAndEvens = (oddsAndEvens) => {
  const sorted = [];
  for (let index = 0; index < oddsAndEvens.length; index += 1) {
    sorted.push(oddsAndEvens.sort(compararNumeros(oddsAndEvens[index], oddsAndEvens[index + 1])));
  }
  return sorted;
}

// Seu código aqui.

console.log(oddsAndEvens); // será necessário alterar essa linha 😉
