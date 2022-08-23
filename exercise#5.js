/*
5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
*/
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
}, info2 = {
    personagem: 'Tio patinhas',
    origem: 'Christmas on Bear Mountain',
    nota: "Dell's Four Color comics #178",
    recorrente: 'Sim'
}

for (chave in info) {
    console.log(info[chave] + ' e ' + info2[chave]);
    if (info.recorrente === 'sim' && info2.recorrente === 'sim') {
        console.log('Ambos recorrentes')
    }
}
