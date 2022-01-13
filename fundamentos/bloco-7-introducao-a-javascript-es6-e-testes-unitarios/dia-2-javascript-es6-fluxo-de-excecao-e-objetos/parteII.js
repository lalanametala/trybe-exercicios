const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};
  
const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Ex 1
const addShift = (lesson, addedKey, keyValue) => {
  const newKey = addedKey;
  lesson[newKey] = keyValue;
}

addShift(lesson2, 'turno', 'noite');

//Ex 2
const printKeys = (objeto) => console.log(Object.keys(objeto));
printKeys(lesson2);

//Ex 3
const objectLength = (objeto) => console.log(Object.entries(objeto).length);
objectLength(lesson2);

//Ex 4
const listValues = (objeto) => console.log(Object.values(objeto));
listValues(lesson1);

//Ex 5
let allLessons = {
    lesson1: {},
    lesson2: {},
    lesson3: {}
};
Object.assign(allLessons.lesson1,lesson1);
Object.assign(allLessons.lesson2,lesson2);
Object.assign(allLessons.lesson3,lesson3);
console.log(allLessons);

//Ex 6
const totalStudents = () => {
  const allKeys = Object.keys(allLessons);
  let totalEstudantes = 0;
  for (let key of allKeys) {
    totalEstudantes += allLessons[key].numeroEstudantes;
  }
  return totalEstudantes;
}
console.log(totalStudents());

//Ex 7
const getValueByNumber = (objeto, posicao) => {
  const keyArray = Object.keys(objeto);
  return objeto[keyArray[posicao]];
}
console.log(getValueByNumber(lesson1, 0));

//Ex 8
const verifyPair = (objeto, chave, valor) => objeto[chave] === valor;
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
