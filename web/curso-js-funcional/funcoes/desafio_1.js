// DESAFIO
// somar(3)(4)(5);
// calcular(3)(7)(fn);

// somar
function somar(a) {
    return function	(b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(somar(3)(4)(5));

// calcular
function calcular(a) {
    return function (b) {
        return function(fn) {
            return fn(a, b);
        }
    }
}
 
console.log(calcular(3)(4)((a, b) => a - b));
