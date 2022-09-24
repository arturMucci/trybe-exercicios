const names = ['João', 'Irene', 'Fernando', 'Maria'];

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const findNameWithFiveLetters = (array) => {
  return array.find((element) => element.length === 5);
};

console.log(findNameWithFiveLetters(names));