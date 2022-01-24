// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'kiwi', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'chantilly', 'crocante'];

const fruitSalad = (fruit, additional) => {
  const completeSalad = [...fruit, ...additional];
  return completeSalad;
};

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const trappistEnterprise = {...user, ...jobInfos};

const printInfo = ({ name, age, nationality, profession, squad, squadInitials}) => `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`;

console.log(printInfo(trappistEnterprise));