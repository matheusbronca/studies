function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20;
global.desc = 0.1;

console.log(getPreco());
console.log(produto.getPreco());

// Outra DUAS opções que temos para executar uma função são:
const carro = {
    preco: 49990, desc: 0.2
}

// CALL
// Os parâmetros são passados diretamente para os argumentos da função (contexto, param1, param2, ...)
console.log(getPreco.call(carro, 0, '$####'));

// APPLY
// Os parâmetros são passados através de um array. (contexto, [param1, param2, ....])
console.log(getPreco.apply(carro, [0, '$']));

