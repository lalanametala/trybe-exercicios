function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
}

function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
}
  
function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
}

function encode(message) {
  message = message.split('');
  for (let index = 0; index < message.length; index += 1){
    if (message[index]==='a'){
        message[index]=1;
    } else if (message[index]=='e'){
      message[index]=2;
    } else if (message[index]=='i'){
      message[index]=3;
    }  else if (message[index]=='o'){
      message[index]=4;
    }  else if (message[index]=='u'){
      message[index]=5;
    } 
  }
  message=message.join('');
  return message;
}

function decode(decodedMessage) {
  decodedMessage=decodedMessage.split('');
  for (let index=0; index<decodedMessage.length;index+=1){
    if (decodedMessage[index]==1){
      decodedMessage[index]='a';
    } else if (decodedMessage[index]==2){
      decodedMessage[index]='e';
    } else if (decodedMessage[index]==3){
      decodedMessage[index]='i';
    }  else if (decodedMessage[index]==4){
      decodedMessage[index]='o';
    }  else if (decodedMessage[index]==5){
      decodedMessage[index]='u';
    } 
  }
  decodedMessage=decodedMessage.join('');
  return decodedMessage;
}

const techList = (array, personName) => {
  if (array.length === 0) {
    return 'Vazio!';
  }
  array = array.sort();
  let sortedTechList = [];
  for (let index = 0; index < array.length; index += 1) {
    let newObject = {
      tech: array[index],
      name: personName
    };
    sortedTechList.push(newObject);
  }
  return sortedTechList;
};

const hydrate = (drinks) => {
  const numDrinks = drinks.match(/\d+/g);
  let count = 0;
  for (let num of numDrinks) {
    count += parseInt(num);
  }
  let finalMessage = '';
  count === 1 ? finalMessage = `${count} copo de água` : finalMessage = `${count} copos de água`;
  return finalMessage;
};

// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  let employeeDetail = null;
  for (let index = 0; index < professionalBoard.length; index += 1) {
    const currentEmployee = professionalBoard[index];
    if (id === currentEmployee.id) {
      employeeDetail = currentEmployee[detail];
      if (employeeDetail === undefined){
        throw new Error('Informação indisponível');
      }
      return employeeDetail;
    }
  }
  if (employeeDetail === null) {
    throw new Error('ID não identificada');
  }
};

module.exports = { 
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
  searchEmployee
};