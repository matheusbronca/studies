// 24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição
// while.

const superHelloWorld = () => {
  let clock = 0;

  while (clock < 11) {
    console.log('Hello World!');
    clock++;
  }
};

superHelloWorld();