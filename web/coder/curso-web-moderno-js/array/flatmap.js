const escola = [
  {
    nome: 'Turma M1',
    alunos: [
      {
        nome: 'Gustavo',
        nota: 8.1,
      },
      {
        nome: 'Ana',
        nota: 9.3,
      },
    ],
  },
  {
    nome: 'Turma M2',
    alunos: [
      {
        nome: 'Rebeca',
        nota: 8.9,
      },
      {
        nome: 'Roberto',
        nota: 7.3,
      },
    ],
  },
];

Array.prototype.flatMap = function(callback) {
  return Array.prototype.concat.apply([], this.map(callback));
};

const getNota = aluno => aluno.nota;
const getNotasTurma = turma => turma.alunos.map(getNota);

const total = escola.flatMap(getNotasTurma);

console.log(total);
