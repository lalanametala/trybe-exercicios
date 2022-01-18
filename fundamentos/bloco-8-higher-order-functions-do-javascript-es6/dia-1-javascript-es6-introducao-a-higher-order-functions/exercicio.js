const wakeUp = () => 'Acordando!!';
const drinkCoffee = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => console.log(func());

doingThings(sleep);