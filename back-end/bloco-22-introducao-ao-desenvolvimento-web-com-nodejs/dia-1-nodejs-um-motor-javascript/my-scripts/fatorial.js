const { questionInt } = require('readline-sync');

const runFatorial = () => {
  const num = questionInt('Insert number: ');
  let result = num;
  for (let index = num - 1; index > 0; index -= 1) {
    result = result * index;
  }
  console.log(`${num}! = ${result}`);
}

runFatorial();

module.exports = runFatorial;