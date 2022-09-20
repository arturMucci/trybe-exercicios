const { myRemove } = require('../script');

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
});
