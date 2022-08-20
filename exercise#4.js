/* 
4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; 
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], cont = numbers.length, soma = 0, media;

for (let i = 0; i < cont; i += 1) {
    soma = soma + numbers[i];
}

media = soma / cont;

if (media > 20) {
    console.log('Valor maior que 20.');
} else {
    console.log('Valor menor ou igual a 20.')
}