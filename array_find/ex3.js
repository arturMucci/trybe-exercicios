const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

// Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:

function findMusic(id, array) {
  // Adicione seu código aqui
  return `a música com o id: ${id} é a ${array.find((element) => element.id === id).title}`;
};

console.log(findMusic('31031685', musicas));