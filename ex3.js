// Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (soluções);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for “N.A”);
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparaArray = (array1, array2) => {
  let gabarito = 0;
  for(let index = 0; index < array1.length; index += 1) {
    if (array2[index] === array1[index]) {
      gabarito += 1;
    }
    if (array2[index] === 'N.A') {
      gabarito += 1;
    }
    if (array2[index] !== array1[index]) {
      gabarito -= 0.5;
    }
  }
  return gabarito;
}

const corrigeProva = (rightA, studentA, func) => {
  return console.log(func(rightA, studentA));
}

corrigeProva(RIGHT_ANSWERS, STUDENT_ANSWERS, comparaArray);
