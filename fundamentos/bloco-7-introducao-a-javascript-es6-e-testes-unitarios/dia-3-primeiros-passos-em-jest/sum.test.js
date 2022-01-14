const sum = require('./sum');

describe('sums two values', () => {
  test('a soma de 4 e 5 deve ser 9', () => {
    expect(sum(4, 5)).toBe(9);
  })
  test('a soma de 0 e 0 deve ser 0', () => {
    expect(sum(0, 0)).toBe(0);
  })
  test('sum(4, "5") lança um erro', () => {
    expect(() => { sum(4, "5") }).toThrow();
  })
  test('sum(4, "5") lança a mensagem de erro "parameters must be numbers"', () => {
    expect(() => { sum(4, "5") }).toThrowError(new Error("parameters must be numbers"));
  })
})

