// Exercício 1
const generateEmail = (anyName) => {
  const email = `${anyName.replaceAll(' ', '_').toLowerCase()}@trybe.com`;
  return email;
}

const employeeInfo = (fullName) => {
  const newEmployee = {
    name: fullName,
    email: generateEmail(fullName),
  };
  return newEmployee;
};

const newEmployees = (myFunction) => {
  const employees = {
    id1: myFunction('Pedro Guerra'),
    id2: myFunction('Luiza Drumond'),
    id3: myFunction('Carla Paiva'), 
    }
  return employees;
};

console.log(newEmployees(employeeInfo));

// Exercício 2
const drawCheck = (bettedNumber, drawnNumber) => {
  if (bettedNumber === drawnNumber) {
    return `Parabéns! Você ganhou!`;
  }
  return "Tente novamente";
}

const drawResult = (bettedNumber, drawCheck) => {
  const drawnNumber = Math.ceil(Math.random() * 5);
   return drawCheck(bettedNumber, drawnNumber); 
}

console.log(drawResult(5, drawCheck));

// Exercício 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const answerChecker = (rightAnswers, givenAnswers) => {
  let counter = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    if (givenAnswers[index] === rightAnswers[index]) {
      counter += 1;
    } else if (givenAnswers[index] !== 'N.A') {
      counter -= 0.5;
    }
  }
  return counter;
}
const graderFunction = (rightAnswers, givenAnswers, answerChecker) => answerChecker(rightAnswers,givenAnswers);

console.log(graderFunction(RIGHT_ANSWERS, STUDENT_ANSWERS, answerChecker));

// Bônus
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};
  
const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};
  
const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};
  
const battleMembers = { mage, warrior, dragon };

const generateRandom = (num) => Math.floor(Math.random() * num);

const rangeArrayGenerator = (min, max) => {
  let rangeArray = [];
  for (let num = min; num <= max; num += 1) {
    rangeArray.push(num);
  }
  return rangeArray;
}

const dragonDamage = () => {
  const rangeArray = rangeArrayGenerator(15, battleMembers.dragon.strength);  
  return rangeArray[generateRandom(rangeArray.length)];
}

const warriorDamage = () => {
  const rangeArray = rangeArrayGenerator(battleMembers.warrior.strength, (battleMembers.warrior.strength * battleMembers.warrior.weaponDmg));  
  return rangeArray[generateRandom(rangeArray.length)];
}

const mageTurn = () => {
  const turnResult = {
    manaSpent: 0,
    damage: 'Não possui mana suficiente'
  };

  if (battleMembers.mage.mana > 15) {
    turnResult.manaSpent = 15;
    const intelligenceValue = battleMembers.mage.intelligence;
    const rangeArray = rangeArrayGenerator(intelligenceValue, intelligenceValue * 2)
    turnResult.damage = rangeArray[generateRandom(rangeArray.length)];
  }
  return turnResult;
}

// const gameActions = {
//   warriorTurn: 
// };

console.log(mageTurn());