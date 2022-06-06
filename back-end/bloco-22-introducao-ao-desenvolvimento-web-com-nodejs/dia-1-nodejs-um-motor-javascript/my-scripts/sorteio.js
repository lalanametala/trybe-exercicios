const runSort = () => {
  const { questionInt } = require('readline-sync');

  const guessedNumber = questionInt('Guess the number: ');

  const randomNumber = Math.floor(Math.random()*11);

  if (guessedNumber === randomNumber) console.log('Parabéns, número correto!');
  if (guessedNumber !== randomNumber) console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
};

module.exports = runSort;
