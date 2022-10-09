function generateRandomNumberBetween(min, max, delay = 2000) {
  if (min > max) [max, min] = [min, max];
  return new Promise((resolve) => {
    setTimeout(() => {
      const factor = max - min + 1;
      const randomNumber = parseInt(Math.random() * factor) + min;
      resolve(randomNumber);
    }, delay);
  });
}

function generateManyRandomNumbersBetween() {
  return Promise.all([
    generateRandomNumberBetween(1, 60, 4000),
    generateRandomNumberBetween(1, 60, 1000),
    generateRandomNumberBetween(1, 60, 500),
    generateRandomNumberBetween(1, 60, 3000),
    generateRandomNumberBetween(1, 60, 100),
    generateRandomNumberBetween(1, 60, 1500),
  ]);
}

console.time('promise');
generateManyRandomNumbersBetween()
  .then(console.log)
  .then(() => {
    console.timeEnd('promise');
  });
