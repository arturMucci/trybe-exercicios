const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const { nationality = 'Brazilian' } = person;

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

//Do jeito que está, quando person é passado para a função getNationality o retorno é João is undefined.Ajuste a função getNationality para que a chamada getNationality(person) retorne João is Brazilian.



console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(person);