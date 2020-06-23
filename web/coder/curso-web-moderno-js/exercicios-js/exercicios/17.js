// 17) Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A 10%
// B 15%
// C 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

const newSalary = (plan, salary) => {
  switch (plan) {
    default:
      console.log('Esse plano é inválido, por favor digite um plano válido');
      break;

    case 'a':
      salary += salary * (10 / 100);
      console.log('New salary: ' + salary);
      break;

    case 'b':
      salary += salary * (15 / 100);
      console.log('New salary: ' + salary);
      break;

    case 'c':
      salary += salary * ( 20 / 100);
      console.log('New salary: ' + salary);
      break;

  }
};

newSalary('a', 1000);
newSalary('b', 1000);
newSalary('c', 1000);