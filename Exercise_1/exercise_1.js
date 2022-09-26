const testeValores = (a, b) => {
  if (a === NaN || b === NaN) {
    throw new Error('Os números devem ser números.');
  }
  if (a === '' || b === '') {
    throw new Error('Os campos NÃO poder estar vazios');
  }
}

const sum = () => {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  try {
    testeValores(value1, value2);
    const result = value1 + value2;
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (e) {
    document.getElementById('result').innerHTML = `${e}`;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}