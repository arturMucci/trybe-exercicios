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
// Parte 1
// 1 - Acesse o elemento elementoOndeVoceEsta.

let ondeEstou = document.getElementById('elementoOndeVoceEsta');

// 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

let pai = ondeEstou.parentElement;
pai.style.backgroundColor = 'red';

// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = 'Exercício3'

// 4 - Acesse o primeiroFilho a partir de pai.

pai.firstChild

// 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

ondeEstou.previousElementSibling

// 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

ondeEstou.nextSibling

// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

ondeEstou.parentElement.lastElementChild.previousElementSibling

// 8 - Agora acesse o terceiroFilho a partir de pai.

pai.lastElementChild.previousElementSibling

// Parte 2.

// 1 - Crie um irmão para elementoOndeVoceEsta.

let irmaoOndeEstou = document.createElement('section');
irmaoOndeEstou.innerText = 'PT2 - Exercicio1';
pai.appendChild(irmaoOndeEstou);

// 2 - Crie um filho para elementoOndeVoceEsta.

let filhoOndeEstou = document.createElement('section');
filhoOndeEstou.innerText = 'pt2 exercicio2';
ondeEstou.appendChild(filhoOndeEstou);

// 3 - Crie um filho para primeiroFilhoDoFilho.

let filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
filhoDoPrimeiroFilhoDoFilho.innerText = 'pt2 exercicio3';
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

// 4 - A partir desse filho criado, acesse terceiroFilho.

local = document.getElementById('primeiroFilhoDoFilho');
local.parentElement.parentElement.lastElementChild.previousElementSibling.previousElementSibling

// Parte 3.

// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

ondeEstou.removeChild(ondeEstou.lastElementChild);
ondeEstou.removeChild(ondeEstou.lastChild.previousElementSibling);
primeiroFilhoDoFilho.removeChild(primeiroFilhoDoFilho.firstElementChild);
pai.removeChild(pai.firstElementChild);
pai.removeChild(pai.lastElementChild);
pai.removeChild(pai.firstElementChild.nextSibling)
pai.removeChild(pai.lastElementChild.previousElementSibling);
pai.removeChild(pai.lastChild.previousElementSibling);
paiDoPai.removeChild(paiDoPai.lastElementChild)