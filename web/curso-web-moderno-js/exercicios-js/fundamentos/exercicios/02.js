// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

const getTypeTriangle = (side1, side2, side3) => {
  if (side1 === side2 && side1 === side3) {
      console.log('Equilátero');
  }
  else if(side1 === side2 || side2 === side3 || side1 == side3) {
      console.log('Isósceles');
      
  }
  else {
      console.log('Escaleno')
  }
};

getTypeTriangle(1, 2 ,3);