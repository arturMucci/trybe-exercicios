const {sum, myRemove} = require('./script');

describe('Exercício 1 - The sum function: ', () => {
  test('1 - Testa se o retorno de sum(4, 5) é 9.', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('2 - Testa se o retorno de sum(0, 0) é 0: ', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('3 - Testa se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5): ', () => {
    expect(() => sum(4, '5')).toThrow();
  });
  test('3 - Testa se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5): ', () => {
    expect(() => sum(4, '5')).toThrow(Error)});
});

describe('Exercício 2 - removeMyArray: ', () => {
  test('1 - Testa se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado: ', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('1 - Testa se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado: ', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('1 - Testa se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado: ', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})
