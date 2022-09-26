const criaArrayLivro = (arrayBooks) => {
  const newArrays = arrayBooks.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
  return newArrays;
};

module.exports = {
  criaArrayLivro
};
