// let & const
let seraQuePode = '?'; // Hoisting

console.log(seraQuePode);

let estaFrio = true;
if (estaFrio) {
  let acao = 'Colocar o casaco!';
  console.log(acao);
}

// const cpf: string = '123.456.000-99';
// cpf = '789.101.132-78';
// console.log(cpf);

const somar = function (n1: number, n2: number): number {
  return n1 + n2;
};

console.log(somar(2, 2));

const subtrair = (n1: number, n2: number): number => n1 - n2;

console.log(subtrair(2, 3));

const saudacao = () => console.log('Olá ');
saudacao();

const falarCom = (pessoa: string): void => console.log('Ola ' + pessoa);
falarCom('João');

// This

// function normalComThis() {
//   console.log(this);
// }

// const normalComThisEspecial = normalComThis.bind('Abc');
// normalComThisEspecial();
// const arrowComThis = () => console.log(this);
// arrowComThis();

// Parâmetro padrão

function contagemRegressiva(
  inicio: number = 3,
  fim: number = inicio - 5
): void {
  while (inicio >= fim) {
    inicio--;
    console.log(inicio);
  }
  console.log('Fim!');
}

contagemRegressiva();
contagemRegressiva(5);

// Rest & Spread

const numbers: number[] = [1, 10, 99, -5];
console.log(Math.max(...numbers));

const turmaA: string[] = ['João', 'Maria', 'Fernanda'];
const turmaB: string[] = [
  'Fernando',
  'Miguel',
  'Lorena',
  ...turmaA,
  'Tiago',
  'Tatiana',
];

console.log(turmaB);

function retornaArray(a: number, b: number, ...args: number[]): number[] {
  console.log(a);
  console.log(b);
  return args;
}

const numeros = retornaArray(1, 2, 4, 5, 6);
console.log(numeros);

// Rest & Spread (Tupla)
const tupla: [number, string, boolean] = [1, 'abc', false];

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`);
}

tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]) {
  console.log(`2) ${params[0]} ${params[1]} ${params[2]} `);
}

tuplaParam2(...tupla);

// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[0];
// const ano = caracteristicas[1];

const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);

const [w, z] = [2, 3];
console.log(w);
console.log(z);

// Destructuring Objeto
const item = {
  nome: 'SSD 480Gb',
  preco: 200,
  caracteristica: {
    x: 'Importado',
  },
};

// const nomeItem = item.nome;
// const preco = item.preco;
const {
  nome: n,
  preco: p,
  caracteristica: { x },
} = item;
console.log(x);
