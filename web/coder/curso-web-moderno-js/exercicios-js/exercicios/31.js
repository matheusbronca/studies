// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

const isNegative = (arr) => {
  const negativeNumbers = [];

  arr.forEach((element) => {
    if (element < 0) {
      negativeNumbers.push(element);
      console.log(element);
    }
  });

  console.log(
    `Existem ${negativeNumbers.length} número(s) negativos neste vetor.`
  );
};

isNegative([-1, -22, -29, 29, 30 ,31 ,39, -23]);