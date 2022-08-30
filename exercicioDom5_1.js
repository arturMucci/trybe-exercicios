/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
*/
let daqui2Anos = document.getElementsByTagName('p')[1];
daqui2Anos.innerText = 'Quero estar trabalhando com WEBDEV!';


/*    
2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
*/
let mainContent = document.getElementsByClassName('main-content');
mainContent[0].style.backgroundColor = 'rgb(76, 164, 109)';
/*
3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
*/
let centerContent = document.getElementsByClassName('center-content');
centerContent[0].style.backgroundColor = 'rgb(255, 255, 255)';

/*
4. Crie e execute uma função que corrija o texto da tag <h1>.
*/
let title = document.getElementsByClassName('title');
title[0].innerText = 'Exercício 5.1 - JavaScript';
/*
5. Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
*/
let paragrafo = document.getElementsByTagName('p');

for (let index = 0; index < paragrafo.length; index += 1) {
  let paragrafo = document.getElementsByTagName('p')[index].innerText.toUpperCase();
  document.getElementsByTagName('p')[index].innerText = paragrafo;
}
/*
6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
*/

for (let index = 0; index < paragrafo.length; index += 1) {
  console.log(paragrafo[index].innerText);
}