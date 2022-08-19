/*
6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

- Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

- Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

- Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais).
*/
let option = 6;

console.log('Selecione a peça: ');
console.log('--------------');
console.log('*****Menu*****');
console.log('--------------');
console.log('1 - The Pawn.');
console.log('2 - The Bishop.');
console.log('3 - The Knight.');
console.log('4 - The Rook.');
console.log('5 - The Queen.');
console.log('6 - The king.');
console.log('--------------');

switch (option) {
    case 1:
        console.log('1 - The Pawn. - 1 square on front, capture diagonaly.');
        break;
    case 2:
        console.log('2 - The Bishop. - Diagonaly, distance free.');
        break;
    case 3:
        console.log('3 - The Knight. - 4 squares in L, jump other pieces.');
        break;
    case 4:
        console.log('4 - The Rook. - Horizontaly and verticaly, distance free.');
        break;
    case 5:
        console.log('5 - The Queen. - Every direction, distance free.');
        break;
    case 6:
        console.log('6 - The king. - 1 square every direction.');
        break;
}
