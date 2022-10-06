// Exercício 1
// Dado o código abaixo, altere a chamada da função rectangleArea de forma que seja impressa a área dos 3 retângulos(rectangle1, rectangle2 e rectangle3).O código deve retornar em sequência 2, 15 e 54.

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  // console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
});

// Exercício 2
// Crie uma função sum que dado um número ilimitado de parâmetros retorna a soma desses parâmetros. Ao chamar a função dessa forma : sum(4,5,6) o número 15 deve ser retornado.

const sum = (...param) => param.reduce((acc, curr) => acc + curr);

// Exercício 3
// Escreva a função personLikes, que dado um objeto de parâmetro que representa uma pessoa(variáveis alex e gunnar), retorna todos os gostos daquela pessoa, conforme mostrado abaixo:

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

// Exercício 4
// Escreva uma função filterPeople que, dada uma lista de pessoas, retorne todas as pessoas australianas que nasceram no século 20:

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo

const filterPeople = people.filter(({ bornIn, nationality }) => bornIn >= 1901 && bornIn <= 2000 && nationality === 'Australian');

// Exercício 5
// Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando apenas 1 linha. O retorno da função utilizando o array myList deve ser [3, 2, 5].

const myList = [5, 2, 3];

const swap = ([a, b, c]) => [c, b, a];

// Exercício 6
// Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é representado dentro de um array.Então seu chefe pede que seja mudado o formato de array para objeto.Crie uma função toObject que, dada uma lista, retorna um objeto representando o carro:

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([carro, marca, ano]) => ({ carro, marca, ano });

// Exercício 7
//Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de medida:

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
  // measurementUnit: unidade de medida
];

// escreva shipLength abaixo
const shipLength = ({ name, length, measurementUnit: unit }) => `${name} is ${length} ${unit} long`;

// Exercício 8
// Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento. Um parâmetro adicional pode ser passado para alterar o cumprimento utilizado:

// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'

// console.log(sum(4, 5, 6));
// console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
// console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'
// console.log(filterPeople);
// console.log(swap(myList));
// console.log(toObject(palio));
// console.log(toObject(shelbyCobra));
// console.log(toObject(chiron));
// console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
// console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
// console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'
