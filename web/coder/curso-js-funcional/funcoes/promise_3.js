function generateNumbsBetween(min, max) {
  if (min > max) {
    // Desutructuring = Array
    [max, min] = [min, max];
  }

  return new Promise((resolve) => {
    const factor = max - min + 1;
    const randomNumber = parseInt(Math.random() * factor) + min;
    resolve(randomNumber);
  });
}

generateNumbsBetween(1, 60)
  .then((num) => num * 10)
  .then((nummX10) => `O número gerado foi ${nummX10}`)
  .then(console.log);
