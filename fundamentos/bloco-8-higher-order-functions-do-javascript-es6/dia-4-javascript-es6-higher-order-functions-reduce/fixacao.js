const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEven = (array) => array
.filter((num) => num % 2 ===0)
.reduce((sum, num) => sum + num);

console.log(sumEven(numbers));

const sumReduce = (array) => array
.reduce((sum, num) => num % 2 === 0 ? sum + num : sum);

console.log(sumReduce(numbers));