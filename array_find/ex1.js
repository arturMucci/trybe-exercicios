const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (array) => {
  // Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
  // Adiciona seu código aqui
  return array.find((element) => element % 3 === 0 && element % 5 === 0);
};

console.log(findDivisibleBy3And5(numbers));