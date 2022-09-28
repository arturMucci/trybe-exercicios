// Exercício 1

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// Utilize o reduce para transformar uma matriz em um array.
const flatten = (arrays) => arrays.map((element) => element.reduce((acc, curr) => acc + curr));

// Exercício 2
// Considere o seguinte array e manipule-o utilizando reduce para fazer o que é pedido:

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Crie uma string com os nomes de todas as pessoas autoras.
const reduceNames = books.map(({ author: { name } }) => name).reduce((nameA, nameB) => nameA + ', ' + nameB) + '.';

// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
// const expectedResult = 43;

const averageAge = Math.round(books.reduce((acc, { releaseYear, author: { birthYear } }) => acc + releaseYear - birthYear, 0)) / books.length;

const longestNamedBook = books.reduce((acc, { name: nome }, index, books) => nome.length > acc.name.length ? books[index] : acc);
// const longestNamedBook = books.reduce((a, b) => b.name.length < a.name.length ? a : b);

// Exercício 3
// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = names.reduce((acc, curr) => acc + curr).split('').filter((string) => ['a', 'A'].includes(string)).length;

// Exercício 4
//Para o próximo exercício você deve criar um novo array de objetos a partir das informações de students e grades, onde cada objeto desse novo array terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de grades refere-se ao estudante na posição 0 de students. Para resolver este exercício, além de reduce, será necessário utilizar também a função map.
// De olho na dica 👀: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = (nome, notas) => {
  // escreva seu código aqui
  const jeito1 = notas.map((element, index) => ({ name: nome[index], average: (element.reduce((a, b) => a + b, 0) / element.length) }))
  const jeito2 = nome.map((element, index) => ({ name: element, average: (notas[index].reduce((a, b) => a + b, 0) / notas[index].length) }));
  console.log(jeito1);
  console.log(jeito2);
}

// console.log(flatten(arrays));
// console.log(reduceNames);
// console.log(averageAge);
// console.log(longestNamedBook);
// console.log(containsA);
// console.log(studentAverage(students, grades));
