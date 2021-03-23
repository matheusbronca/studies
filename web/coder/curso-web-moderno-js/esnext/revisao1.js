// let e const
{
    var a = 2;
    let b = 3;

console.log(b);
}

console.log(a);

// Template String
const produto = 'iPad';
console.log(`${produto} é caro!!`);

// Destructuring (Tirar um item de dentro de um array / objeto / string / etc);
const [l, e, ...tras] = 'Desestruturado';
console.log(l, e, tras);

const [x, , y] = [1, 2, 3];
console.log(x, y);

// Para se retirar atributos de um objeto, utilizamos CHAVES ao invés de colchetes.
const { idade: i, nome } = { nome: 'Ana', idade: 9 };
console.log(i, nome);

