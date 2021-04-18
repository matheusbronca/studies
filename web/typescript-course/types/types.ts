// string
let nome: string = 'João';
console.log(nome);
// nome = 28

//numbers
let idade: number = 27;
idade = 28.5;
console.log(idade);

//bollean
let possuiHobbies: boolean = false;
// possuiHobbies = 1;
console.log(possuiHobbies);

// TIPOS EXPLÍCITOS

let minhaIdade: number;
minhaIdade = 27;

// array
let hobbies: string[] = ['Cozinhar', 'Praticar Esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);

// tuplas
let endereco: [string, number, number] = ['Av. Principal', 99, 123];
console.log(endereco);

// enums
// ==> Estrutura que você define valores pré-definidos
enum Cor {
  Cinza, // 0
  Amarelo, // 1
  Verde = 100, // 100
  Azul, // 101
}

let minhaCor: Cor = Cor.Amarelo;
console.log(minhaCor);
console.log(Cor.Amarelo);
console.log(Cor.Verde);
console.log(Cor.Azul);

// any
let carro: any = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);

// Desafio
// Criar um objeto funcionário com:
//     - Array de strings com os nomes dos supervisores
//     - Função de bater ponto que recebe a hora (número)
//       e retorna uma string.
//         -> Ponto normal (<= 8)
//         -> Fora do horário (> 8)
type Funcionario = {
  supervisores: string[];
  baterPonto: (horario: number) => string;
};

let funcionario: Funcionario;

funcionario = {
  supervisores: ['Carlos', 'André', 'Letícia'],
  baterPonto: (horario) => {
    return horario <= 8 ? 'Ponto normal' : 'Fora do horário';
  },
};

console.log(funcionario);
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));

// Union Types
let nota: number | string = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';

// Type never
// (Nunca vai sair da função (loops / erros))
function falha(msg: string): never {
  throw new Error(msg);
}

const produto = {
  nome: 'Sabão',
  preco: -3,
  validarProduto() {
    if (!this.nome || this.nome.trim().length === 0) {
      falha('Precisa ter um nome');
    }
    if (this.preco <= 0) {
      falha('Preço inválido!');
    }
  },
};

let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
  nome: string;
  tel1: string;
  tel2: string | null;
};

const contato1: Contato = {
  nome: 'Fulano',
  tel1: '98765432',
  tel2: null,
};

console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);

//  Desafio

type ContaBancaria = { saldo: number; depositar: (valor: number) => void };

type Correntista = {
  nome: string;
  contaBancaria: ContaBancaria;
  contatos: string[];
};

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor) {
    this.saldo += valor;
  },
};

let correntista: Correntista = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '987654321'],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
console.log(correntista.contaBancaria.saldo);
console.log(correntista.contaBancaria.depositar(1000));
console.log(correntista.contaBancaria.saldo);