// 12) Faça um algoritmo que calcule o fatorial de um número.

const fatorial = (x) => {
    if(x === 1 || x === 0) {
        return 1;
    }
        return x * fatorial(x - 1);
}

console.log(fatorial(4));