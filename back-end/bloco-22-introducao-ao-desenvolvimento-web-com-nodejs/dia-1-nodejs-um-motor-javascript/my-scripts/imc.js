const readline = require('readline-sync');

const weight = readline.questionFloat('Qual seu peso? ');
const height = readline.questionFloat('Qual sua altura? ');

console.log(`IMC = ${weight/(height*height)}`);