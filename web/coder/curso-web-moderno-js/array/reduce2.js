const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: false },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'João', nota: 8.7, bolsista: false },
];

// Desafio 1: Todos os alunos são bolsistas?

const isBolsistas = alunos
.map((aluno => aluno.bolsista))
.reduce((resultado, bolsista) => resultado && bolsista)

console.log(isBolsistas);

// Desafio 2: Algum aluno é bolsista?
const isBolsista = alunos
.map((aluno => aluno.bolsista))
.reduce((resultado, bolsista) => resultado || bolsista);


console.log(isBolsista);
