const testingScope = (escopo) => {
  let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
  if (escopo === true) {
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);