const names = ['Mateus', 'José', 'Ana','Cláudia', 'Bruna'];

// Escreva uma função que recebe dois parâmetros: o primeiro um array de nomes e o segundo, um nome qualquer. Essa função deve retornar true se o segundo parâmetro - um nome qualquer - estiver contido no primeiro parâmetro - array de nomes. Caso não esteja contido, deve retornar false.
//Adicione seu código aqui
const hasName = (arr, teste) => arr.some((element) => teste === element);

console.log(hasName(names, 'Ana'));
