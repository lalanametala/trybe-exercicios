const runImc = () => {
  const readline = require('readline-sync');

  const weight = readline.questionFloat('Qual seu peso? ');
  const height = readline.questionFloat('Qual sua altura? ');

  const IMC = weight/(height*height);

  console.log(`IMC = ${IMC.toFixed(2)}`);

  switch (true) {
    case (IMC < 18.5):
      console.log('Abaixo do peso (magreza)')
      break;
    case (IMC >= 18.5 && IMC <= 24.9):
      console.log('Peso normal')
      break;
    case (IMC >= 25 && IMC <= 29.9):
      console.log('Acima do peso (sobrepeso)')
      break;
    case (IMC >= 30 && IMC <= 34.9):
      console.log('Obesidade grau I')
      break;
    case (IMC >= 35 && IMC <= 39.9):
      console.log('Obesidade grau II')
      break;
    default:
      console.log('Obesidade graus III e IV');
      break;
  };
};

module.exports = runImc; 