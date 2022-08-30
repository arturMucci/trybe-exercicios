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
*/
// 1 - Acesse o elemento elementoOndeVoceEsta.
let ondeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

// 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
ondeVoceEsta.parentElement.style.backgroundColor = 'red';

// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
ondeVoceEsta.firstElementChild.innerText = 'Texto a ele.';

// 4 - Acesse o primeiroFilho a partir de pai.
let primeiroFilhoDoPai = document.querySelector('#pai').firstElementChild;
// 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
ondeVoceEsta.firstElementChild;

// 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
ondeVoceEsta.nextSibling;

// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
ondeVoceEsta.nextSibling.nextSibling

// 8 - Agora acesse o terceiroFilho a partir de pai.
pai.lastElementChild.previousElementSibling
