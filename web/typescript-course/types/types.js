"use strict";
// string
var nome = 'João';
console.log(nome);
// nome = 28
//numbers
var idade = 27;
idade = 28.5;
console.log(idade);
//bollean
var possuiHobbies = false;
// possuiHobbies = 1;
console.log(possuiHobbies);
// TIPOS EXPLÍCITOS
var minhaIdade;
minhaIdade = 27;
// array
var hobbies = ['Cozinhar', 'Praticar Esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);
// tuplas
var endereco = ['Av. Principal', 99, 123];
console.log(endereco);
// enums
// ==> Estrutura que você define valores pré-definidos
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul";
})(Cor || (Cor = {}));
var minhaCor = Cor.Amarelo;
console.log(minhaCor);
console.log(Cor.Amarelo);
console.log(Cor.Verde);
console.log(Cor.Azul);
// any
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
var funcionario;
funcionario = {
    supervisores: ['Carlos', 'André', 'Letícia'],
    baterPonto: function (horario) {
        return horario <= 8 ? 'Ponto normal' : 'Fora do horário';
    },
};
console.log(funcionario);
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
// Union Types
var nota = 10;
console.log("Minha nota \u00E9 " + nota + "!");
nota = '10';
// Type never
// (Nunca vai sair da função (loops / erros))
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: -3,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length === 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido!');
        }
    },
};
var alturaOpcional = 12;
alturaOpcional = null;
var contato1 = {
    nome: 'Fulano',
    tel1: '98765432',
    tel2: null,
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    },
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '987654321'],
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
console.log(correntista.contaBancaria.saldo);
console.log(correntista.contaBancaria.depositar(1000));
console.log(correntista.contaBancaria.saldo);
