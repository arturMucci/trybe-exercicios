const geraEmail = (nome) => {
  const email = `${nome.replace(' ', '.').toLowerCase()}@betrybe.com`;
  return { nome : nome , email : email};
}

const newEmployees = (func) => {
  const employees = {
    // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id1: func('Pedro Guerra'), 
    // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), 
    // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), 
  }
  return console.log(employees);
};

newEmployees(geraEmail);
