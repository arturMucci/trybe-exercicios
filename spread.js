// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Banana', 'Kiwi', 'caqui'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite-Condenado', 'Creme de leite', 'leite-condensado'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));