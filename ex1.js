const geraEmail = (nome) => {
  const email = `${nome.replace(' ', '.').toLowerCase()}@betrybe.com`;
  return { nome : nome , email : email};
}

const newEmployees = (employee) => {
  const employees = {
    // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id1: geraEmail('Pedro Guerra'), 
    // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id2: geraEmail('Luiza Drumond'), 
    // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    id3: geraEmail('Carla Paiva'), 
  }
  return employees;
};

console.log(newEmployees());
