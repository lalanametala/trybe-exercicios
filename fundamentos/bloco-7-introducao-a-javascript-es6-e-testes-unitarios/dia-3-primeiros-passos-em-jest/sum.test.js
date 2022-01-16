const { 
    sum,
    myRemove,
    myFizzBuzz,
    encode,
    decode
} = require('./sum');

describe('sums two values', () => {
  test('a soma de 4 e 5 deve ser 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('a soma de 0 e 0 deve ser 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('sum(4, "5") lança um erro', () => {
    expect(() => { sum(4, "5") }).toThrow();
  });
  test('sum(4, "5") lança a mensagem de erro "parameters must be numbers"', () => {
    expect(() => { sum(4, "5") }).toThrowError(new Error("parameters must be numbers"));
  });
})

describe('removes element from array', () => {
    test('myRemove([1, 2, 3, 4], 3) retorna o array [1, 2, 4]', () => {
      expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    test('myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });   
    test('myRemove([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});

describe('A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', () => {
    test('retorno de myFizzBuzz(15) deve ser "fizzbuzz"', () => {
      expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    test('retorno de myFizzBuzz(5) deve ser "buzz"', () => {
        expect(myFizzBuzz(5)).toBe('buzz');
    });
    test('retorno de myFizzBuzz(2) deve ser 2', () => {
        expect(myFizzBuzz(2)).toBe(2);
    });
    test('retorno de myFizzBuzz("3, 5") deve ser false', () => {
        expect(myFizzBuzz('3, 5')).toBe(false);
    });
})

describe('codifica uma mensagem de letras para números', () => {
  //teste1
  test('encode() é uma função', () => {
    expect(typeof encode).toBe('function');
  });
  //teste2
  test('encode("a") retorna 1', () => {
    expect(encode('a'),).toBe('1');
  });
  test('encode("e") retorna 2', () => {
    expect(encode('e')).toBe("2");
  });
  test('encode("i") retorna 3', () => {
    expect(encode('i')).toBe("3");
  });
  test('encode("o") retorna 4', () => {
    expect(encode('o')).toBe("4");
  });
  test('encode("u") retorna 5', () => {
    expect(encode('u')).toBe("5");
  });
  //teste4
  test('encode("f") retorna "f"', () => {
    expect(encode('f')).toBe('f');
  });
  //teste5
  test('a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('aeiou').length).toBe('aeiou'.length);
  })
});

describe('decodifica uma mensagem de números para letras', () => {
  //teste1
  test('decode() é uma função', () => {
    expect(typeof decode).toBe('function');
  });
  //teste2
  test('decode("1") retorna a', () => {
    expect(decode('1'),).toBe('a');
  });
  test('decode("2") retorna e', () => {
    expect(decode('2')).toBe("e");
  });
  test('decode("3") retorna i', () => {
    expect(decode('3')).toBe("i");
  });
  test('decode("4") retorna o', () => {
    expect(decode('4')).toBe("o");
  });
  test('decode("5") retorna u', () => {
    expect(decode('5')).toBe("u");
  });
  //teste4
  test('decode("7") retorna "7"', () => {
    expect(decode('7')).toBe('7');
  });
  //teste5
  test('a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(decode('12345').length).toBe('12345'.length);
  })
});
