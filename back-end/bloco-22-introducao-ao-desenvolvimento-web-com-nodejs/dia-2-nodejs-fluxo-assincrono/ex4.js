const { readFile, writeFile } = require('fs').promises;

const readData = async (file) => {
  const results = await readFile(file, 'utf-8');
  const fileData = JSON.parse(results);
  
  return fileData;
};

// const printData = async () => {
//   const fileData = await readData();
//   fileData.map(({ id, name }) => console.log(`${id} - ${name}`));
// };

// printData();

// const findID = async (searchID) => {
//   const fileData = await readData();
//   const foundCharacter = fileData.find(({id}) => id === searchID);

//   return new Promise((resolve, reject) => {
//     if(!foundCharacter) reject(new Error('id não encontrado'))
//     resolve(foundCharacter);
//   });
// };

// findID('2')
//   .then(result => console.log(`${result.id} - ${result.name}`))
//   .catch(err => console.log(`erro: ${err.message}`));

// const removeCharacters6And10 = async () => {
//   const fileData = await readData();
//   const newData = fileData.filter(({id}) => id !== '6' && id !== '10');
//   await writeFile('./simpsons.json', JSON.stringify(newData));
// };

// removeCharacters6And10()
//   .then(result => console.log(`sucesso`));

// const createFile = async () => {
//   const fileData = await readData();
//   const newData = fileData.filter(({id}) => id >= '1' && id <= '4');
//   await writeFile('./simpsonFamily.json', JSON.stringify(newData), { flag: 'wx' });
// };

// createFile()
//   .then(result => console.log(`arquivo criado`));

// const addNelson = async () => {
//   const fileData = await readData('./simpsonFamily.json');
//   const newData = [...fileData, { id:"8", name:"Nelson Muntz" }];
//   await writeFile('./simpsonFamily.json', JSON.stringify(newData));
// };

// addNelson()
//   .then(result => console.log(`arquivo alterado`));

const changeNelson = async () => {
  const fileData = await readData('./simpsonFamily.json');
  const newData = fileData.map((curr) => {
    if (curr.name === 'Nelson Muntz') return {id:"5", name:"Maggie Simpson"};
    return curr;
  })
  await writeFile('./simpsonFamily.json', JSON.stringify(newData));
};

changeNelson()
  .then(result => console.log('arquivo alterado'));