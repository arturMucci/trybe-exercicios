// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 
// recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. 
// O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).

const randomNum = (max) => {
  return Math.ceil(Math.random() * max);
}

const resultadoSorteio = (teste, randomNumber) => {
  const random = randomNumber(5);
  console.log(random);
  console.log(teste == random ? 'Parabéns você ganhou' : 'Tente novamente');
}

resultadoSorteio(1, randomNum);
