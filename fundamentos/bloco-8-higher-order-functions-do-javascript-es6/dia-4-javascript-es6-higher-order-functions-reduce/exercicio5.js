const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((totalACounter, currentName) => {
    let splittedName = currentName.toLowerCase().split('');
    return totalACounter += splittedName.reduce((aCounter, letter) => letter === 'a' ? aCounter += 1 : aCounter, 0);
  }, 0);
}

console.log(containsA());