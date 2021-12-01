let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let position in car){
      console.log(position+": "+car[position]);
  }