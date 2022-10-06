// Exercício 1
// const getPlanet = () => {
//   const mars = {
//     name: 'Mars',
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: 'kilometers',
//     },
//   };
//   console.log('Returned planet: ', mars);
// };

// setTimeout(() => getPlanet(), 4000); // Imprime Marte depois de 4 segundos

// Exercício 2

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const temperatureInFarenheit = (celsius) => {
  const farenheit = celsius * (9 / 5) + 32;
  console.log(`Essa temperatura equivale a ${farenheit}ºF`);
}

const errorCase = () => {
  throw new Error('Erro de transmissão!');
}

const sendMarsTemperature = (error) => {
  const temp = getMarsTemperature();
  if (temp) {
    console.log(`A temperatura de marte a 5 segundos atrás era: ${temp}ºC`);
    setTimeout(() => temperatureInFarenheit(temp), messageDelay());
  } else {
    error()
  }
}

// Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo
setTimeout(() => sendMarsTemperature(errorCase), messageDelay());

// Exercício 3


