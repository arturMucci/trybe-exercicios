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

const formatedBookNames = () => {
  // escreva seu código aqui
  return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
}

const nameAndAge = () => {
  // escreva seu código aqui
  return books.map(({ author, releaseYear }) => {
    return ({ 'age': releaseYear - author.birthYear, 'author': author.name})
  }).sort(({ age: A }, { age: B }) => A - B);
}


const fantasyOrScienceFiction = () => {
  // escreva seu código aqui
  return books.filter((book) => ['Fantasia', 'Ficção Científica'].includes(book.genre));
}

const oldBooksOrdered = () => {
  // escreva seu código aqui
  let data = Date().split(' ')[3];
  return books.filter(({ releaseYear }) => data - releaseYear >= 60)
  .sort(({ releaseYear: A }, {releaseYear: B}) => A - B);
}

const fantasyOrScienceFictionAuthors = () => {
  // escreva seu código aqui
  return books.filter((book) => ['Fantasia', 'Ficção Científica'].includes(book.genre))
  .map(({ author }) => author.name)
  .sort();
}

const oldBooks = () => {
  // escreva seu código aqui
  let data = Date().split(' ')[3];
  return books.filter(({ releaseYear }) => data - releaseYear >= 60)
  .map((book) => book.name)
  .sort();
}

const authorWith3DotsOnName = () => {
  // escreva seu código aqui
  return books.filter(({ author: { name } }) => name.split(' ').filter((palavra) => palavra.endsWith('.')).length === 3)[0].name;
}

// console.log(formatedBookNames());
// console.log(nameAndAge());
// console.log(fantasyOrScienceFiction());
// console.log(oldBooksOrdered());
// console.log(fantasyOrScienceFictionAuthors());
// console.log(oldBooks());
// console.log(authorWith3DotsOnName());
