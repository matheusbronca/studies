// 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

const growthTax = (height1, tax1, height2, tax2) => {
  let time = 0;

  if (height1 < height2) {
    if (tax1 > tax2) {
      while (height1 <= height2) {
        time++;
        height1 += height1 * tax1;
        height2 += height2 * tax2;
        
      }

      return console.log(
        `A Criança 01 ultrapassará a Criança 02 em exatos ${time} ano(s).`
      );
    } else {
      return console.log('A Criança 01 nunca ultrapassará a Criança 02.');
    }
  } else if (height2 < height1) {
    if (tax2 > tax1) {
      while (height2 <= height1) {
        time++;
        height1 += height1 * tax1;
        height2 += height2 * tax2;
        
      }

      return console.log(
        `A Criança 02 ultrapassará a Criança 01 em ${time} ano(s).`
      );
    } else {
      return console.log('A Criança 02 nunca ultrapassará a Criança 01.');
    }
  }
};

growthTax(0.9, 0.5, 1.2, 0.3);
growthTax(1.3, 0.5, 0.8, 0.3);
growthTax(1.3, 0.5, 0.8, 0.6);