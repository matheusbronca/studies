// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

const evenOrOdd = (arr) => {
    let even = 0;
    let odd = 0;

  arr.forEach((element) => {
    if (element % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  });

  console.log(`Pares: ${even}, Ímpares: ${odd}`);
};

evenOrOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);