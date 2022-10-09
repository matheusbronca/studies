function generateNumberBetween(min, max, prohibitedNumbers) {
  if (min > max) [max, min] = [min, max];
  return new Promise((resolve, reject) => {
    const factor = max - min + 1;
    const randomNumber = parseInt(Math.random() * factor) + min;
    if (prohibitedNumbers.includes(randomNumber)) {
      reject('Número repetido!!!');
    } else {
      resolve(randomNumber);
    }
  });
}

async function generateMegaSena(quantityOfNumbers, tries = 1) {
  try {
    const numbers = [];

    for (let _ of Array(quantityOfNumbers).fill()) {
      numbers.push(await generateNumberBetween(1, 60, numbers));
    }
    return numbers;
  } catch (e) {
    if (tries > 10) {
      throw 'Que chato!!!';
    }
    return generateMegaSena(quantityOfNumbers, tries + 1);
  }
}

// generateNumberBetween(1, 5, [1, 2, 4]).then(console.log).catch(console.log);
generateMegaSena(15).then(console.log).catch(console.log);
