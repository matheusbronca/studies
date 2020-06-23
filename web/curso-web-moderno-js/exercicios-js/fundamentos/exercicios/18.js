// 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
// switch. Crie um case default que escreva ‘Número fora do intervalo.’
const readNumber = (n) => {
  switch (n) {
    default:
      console.log('Número fora do intervalo');
      break;
    
    case 0:
        console.log('ZERO');
        break;

    case 1:
      console.log('UM');
      break;

    case 2:
      console.log('DOIS');
      break;

    case 3:
      console.log('TRÊS');
      break;

    case 4:
      console.log('QUATRO');
      break;

    case 5:
      console.log('CINCO');
      break;

    case 6:
      console.log('SEIS');
      break;

    case 7:
      console.log('SETE');
      break;

    case 8:
      console.log('OITO');
      break;

    case 9:
      console.log('NOVE');
      break;

    case 10:
      console.log('DEZ');
      break;
  }
};

readNumber(0);
readNumber(1);
readNumber(2);
readNumber(3);
readNumber(4);
readNumber(5);
readNumber(6);
readNumber(7);
readNumber(8);
readNumber(9);
readNumber(10);