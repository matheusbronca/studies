// arrow function
const boaNoite = () => console.log('Boa noite!');

boaNoite();

const saudacao = nome => `Fala ${nome}, beleza??!!`
console.log(saudacao('Maria'));

const somar = (...array) => {
    let total = 0;
    for(let n of array) {
        total += n;
    };
    return total;
}

console.log(somar(1, 2 ,3, 4, 5, 6, 7, 8, 9, 10));

const potencia = base => exp => Math.pow(base, exp);

console.log(potencia(2)(10));

// this NÃO FUNCIONA NORMALMENTE EM ARROW FUNCTIONS;
Array.prototype.last = function () {
    console.log(this[this.length - 1]);
    
}

const numeros = [1, 2, 3];
numeros.last();
