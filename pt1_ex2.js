// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 
// recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. 
// O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).

// const randomNum = (max) => Math.round(Math.random() * max);
// const resultadoSorteio = (teste, randomNumber) => console.log(teste == randomNumber(5) ? 'Parabéns você ganhou' : 'Tente novamente');
// resultadoSorteio(1, randomNum);

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const blabla = 30;

console.log(Math['round'](Math['random']() * mage['mana']));


