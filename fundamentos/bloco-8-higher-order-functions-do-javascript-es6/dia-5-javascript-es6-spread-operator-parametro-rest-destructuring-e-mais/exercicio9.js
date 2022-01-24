const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const makeMonths = ({ spring, summer, autumn, winter }) => [...spring, ...summer, ...autumn, ...winter];

console.log(makeMonths(yearSeasons));