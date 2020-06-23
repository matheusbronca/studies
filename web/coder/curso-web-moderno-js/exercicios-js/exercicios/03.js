// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

const pow = (base, expoente) => Math.pow(base, expoente);

console.log(pow(2,8));

// CORREÇÃO:
// Novo método para trabalhar com expoentes

const powNew = (base, expoente) => {
    return base ** expoente;
}

console.log(powNew(3,3));
