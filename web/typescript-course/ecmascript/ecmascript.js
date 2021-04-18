"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// let & const
var seraQuePode = '?'; // Hoisting
console.log(seraQuePode);
var estaFrio = true;
if (estaFrio) {
    var acao = 'Colocar o casaco!';
    console.log(acao);
}
// const cpf: string = '123.456.000-99';
// cpf = '789.101.132-78';
// console.log(cpf);
var somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
var subtrair = function (n1, n2) { return n1 - n2; };
console.log(subtrair(2, 3));
var saudacao = function () { return console.log('Olá '); };
saudacao();
var falarCom = function (pessoa) { return console.log('Ola ' + pessoa); };
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
function contagemRegressiva(inicio, fim) {
    if (inicio === void 0) { inicio = 3; }
    if (fim === void 0) { fim = inicio - 5; }
    while (inicio >= fim) {
        inicio--;
        console.log(inicio);
    }
    console.log('Fim!');
}
contagemRegressiva();
contagemRegressiva(5);
// Rest & Spread
var numbers = [1, 10, 99, -5];
console.log(Math.max.apply(Math, numbers));
var turmaA = ['João', 'Maria', 'Fernanda'];
var turmaB = __spreadArrays([
    'Fernando',
    'Miguel',
    'Lorena'
], turmaA, [
    'Tiago',
    'Tatiana',
]);
console.log(turmaB);
function retornaArray(a, b) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    console.log(a);
    console.log(b);
    return args;
}
var numeros = retornaArray(1, 2, 4, 5, 6);
console.log(numeros);
// Rest & Spread (Tupla)
var tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log("1) " + a + " " + b + " " + c);
}
tuplaParam1.apply(void 0, tupla);
function tuplaParam2() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    console.log("2) " + params[0] + " " + params[1] + " " + params[2] + " ");
}
tuplaParam2.apply(void 0, tupla);
// Destructuring (array)
var caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[0];
// const ano = caracteristicas[1];
var motor = caracteristicas[0], ano = caracteristicas[1];
console.log(motor);
console.log(ano);
var _a = [2, 3], w = _a[0], z = _a[1];
console.log(w);
console.log(z);
// Destructuring Objeto
var item = {
    nome: 'SSD 480Gb',
    preco: 200,
    caracteristica: {
        x: 'Importado',
    },
};
// const nomeItem = item.nome;
// const preco = item.preco;
var n = item.nome, p = item.preco, x = item.caracteristica.x;
console.log(x);
