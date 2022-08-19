/*
3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
*/

const a=9231, b=256, c=1;

if (a>b && a>c) {
    maior = a;
    console.log('O maior número é a constante a: ', maior);
} else if (b>a && b>c) {
    maior = b;
    console.log('O maior número é a constante b: ', maior);
} else if (c>a && c>b) {
    maior = c;
    console.log('O maior número é a constante c: ', maior);
}


