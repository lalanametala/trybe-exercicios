const oper = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) reject(new Error('Informe apenas números'));
    const result = (num1 + num2) * num3;
    if(result < 50) reject(new Error('Valor muito baixo'));
    resolve(result);
  });
};

const rN = () => Math.floor(Math.random() * 100 + 1);

oper(rN(), rN(), rN())
  .then(result => console.log('sucesso: %s', result))
  .catch(err => console.log('erro: %s', err.message));