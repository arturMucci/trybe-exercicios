/* 
Há, ao todo, as seguintes propriedades:
parentNode: retorna o nó pai.
parentElement: retorna o elemento pai.
childNodes: retorna um NodeList com todos os nós filhos.
children: retorna um HTMLCollection com todos os elementos filhos.
firstChild: retorna o primeiro nó filho.
firstElementChild: retorna o primeiro elemento filho.
lastChild: retorna o último nó filho.
lastElementChild: retorna o último elemento filho.
nextSibling: retorna o próximo nó.
nextElementSibling: retorna o próximo elemento.
previousSibling: retorna o nó anterior.
previousElementSibling: retorna o elemento anterior.
appendChild(item): acrescenta elemento irmão.
createElement(tag): cria elemento html.
*/
// Parte 2.

  // 1 - Crie um irmão para elementoOndeVoceEsta.
  // let pai = document.querySelector('#pai');
  // let element = document.createElement('section');
  // element.innertext = 'Exercício1';
  // pai.appendChild(element);
  
  // 2 - Crie um filho para elementoOndeVoceEsta.
  // let elementoOndeEstou = document.querySelector('#elementoOndeVoceEsta');
  // let element2 = document.createElement('section');
  // element2.innerText = 'Exercício2';
  // elementoOndeEstou.appendChild(element2);

  // 3 - Crie um filho para primeiroFilhoDoFilho.
  // let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
  // let filhoDoPrimeiroFilhoDoFilhoQueEuCriei = document.createElement('section');
  // filhoDoPrimeiroFilhoDoFilhoQueEuCriei.innerText = 'Exercicio3';
  // primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilhoQueEuCriei);​

  // 4 - A partir desse filho criado, acesse terceiroFilho.
  // filhoDoPrimeiroFilhoDoFilhoQueEuCriei.parentElement.parentElement.parentElement.lastElementChild.previousElementSibling