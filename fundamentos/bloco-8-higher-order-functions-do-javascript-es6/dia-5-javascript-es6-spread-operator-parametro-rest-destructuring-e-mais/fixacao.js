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

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

const [message, func] = saudacoes;

func(message);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida);

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,,...sohPares] = numerosPares

console.log(numerosPares); // [6, 8, 10, 12];
console.log(sohPares);

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo