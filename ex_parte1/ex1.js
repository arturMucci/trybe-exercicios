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

// Adicione o código do exercício aqui:

// Ex.1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// const autorNascido1947 = books.find((element) => element.author.birthYear === 1947).author.name;

// Ex.2 - Retorne o nome do livro de menor nome.
// let smallerName = books[0].name;
// const maiorNome = books.forEach((element) => {
//   smallerName = element.name.length < smallerName.length ? element.name : smallerName;
// });

// Ex.3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
// let firstLength26 = '';
// const nome26 = books.forEach((element) => {
//   firstLength26 = element.name.length === 26 ? element.name : firstLength26;
// });

// Ex.4 - Ordene os livros por data de lançamento em ordem decrescente.
// const releaseDateBackwards = () => {
//   return books.sort((a, b) => b.releaseYear - a.releaseYear);
// }

// Ex.5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
// const expectedResult = false;

// const everyoneWasBornOnSecXX = books.every((element) => {
//   const stringElement = element.author.birthYear.toString();
//   return stringElement.startsWith('19');
// })

// Ex.5 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
// const expectedResult = true;

// const someBookWasReleaseOnThe80s = books.some((element) => {
//   const stringElement = element.releaseYear.toString();
//   return stringElement[1] === '9' && stringElement[2] === '8';
// })

// Ex.6 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
// let test = 0;
// const authorUnique = () => {
//   books.forEach((element1) => {
//     books.forEach((element2) => {
//       test += element1.author.birthYear === element2.author.birthYear ? 1 : 0;
//     });
//   })
//   return test === 6;
// };

// console.log(autorNascido1947);
console.log(smallerName);
// console.log(firstLength26);
// console.log(releaseDateBackwards());
// console.log(everyoneWasBornOnSecXX);
// console.log(someBookWasReleaseOnThe80s);
// console.log(authorUnique());
