//Fixar I

const testingScope = escopo => (escopo ? `Não devo ser utilizada fora do meu escopo (if)
ótimo, fui utilizada no escopo !` : `Não devo ser utilizada fora meu escopo (else)`);
console.log(testingScope(true));


//Fixar 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const compareNumbers = (a, b) => a - b;
const orderedArray = (array) => array.sort(compareNumbers);


console.log(`Os números ${orderedArray(oddsAndEvens)} se encontram ordenados de forma crescente!`); 