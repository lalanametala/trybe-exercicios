// Exercício 1
const generateEmail = (anyName) => {
  const splittedName = anyName.toLowerCase().split(' ');
  let email = '';
  for (let index = 0; index < splittedName.length; index +=1) {
    if (index !== splittedName.length - 1) {
      email += `${splittedName[index]}_`;
    } else {
      email += `${splittedName[index]}@trybe.com`;
    }
  }
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
