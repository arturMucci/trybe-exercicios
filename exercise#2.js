/* 
2 - Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". 

Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber'; 
*/
let word = 'tryber', word2 = [], cat = '';

for (i = word.length - 1; i >= 0; i -= 1) {
    word2.push(word[i]); 
}

for (i = 0; i < word2.length; i += 1) {
    cat = cat + word2[i]; 
}

console.log(cat);
