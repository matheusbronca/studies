const a = 1;
const b = 2;
const c = 3;

// Métodos diferentes de passar argumentos, mas o mesmo resultado;
const obj1 = { a: a, b: b, c: c };
const obj2 = { a, b, c };
console.log(obj1, obj2);

const nomeAttr = 'nota';
const valorAttr = 7.87;

const obj3 = {};
obj3[nomeAttr] = valorAttr;
console.log(obj3);

const obj4 = { [nomeAttr]: valorAttr };
console.log(obj4);

// Duas maneiras de declarar funções dentro de um OBJETO;
// Utilizar a mais enxuta (segunda), que veio com o ES2015
const obj5 = {
  funcao1: function () {
    // ....
  },
  funcao2() {
    // ...
  },
};

console.log(obj5);
