/* 
5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.*/
let a=5, b=4, c=7;

if (a+b>c && b+c>a && a+c>b) {
    console.log(true);
} else {
    console.log(false);
}
