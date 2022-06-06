const { questionFloat } = require('readline-sync');

const distance = questionFloat('Insert distance (m): ');
const time = questionFloat('Insert time (s): ');

console.log(`Speed: ${distance/time} m/s`);