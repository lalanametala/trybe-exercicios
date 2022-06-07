const runSort = require('./sorteio');
const runImc = require('./imc');
const runSpeed = require('./velocidade');
const runFatorial = require('./fatorial');
const { questionInt } = require('readline-sync');

console.log(`1- IMC
2- Velocidade
3- Sorteio
4- Fatorial`);

const runOption = questionInt('Selecione o programa: ');

switch (runOption) {
  case 1:
    runImc();
    break;
  case 2:
    runSpeed();
    break;
  case 3:
    runSort();
     break;
  case 4:
    runFatorial();
     break;  
  default:
    console.log('Opção inválida!');
};
