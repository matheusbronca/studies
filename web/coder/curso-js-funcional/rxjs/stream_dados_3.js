const { interval } = require('rxjs');

const generateNumbers = interval(500);

generateNumbers.subscribe((num) => console.log(Math.pow(2, num)));
