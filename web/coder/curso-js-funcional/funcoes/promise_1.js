const primeiroElemento = (array) => array[0];
const primeiraLetra = (string) => string[0];
const letraMinuscula = (letra) => letra.toLowerCase();

// O Then SEMPRE recebe APENAS UM PARÂMETRO;
// resolve é o nome da função que 'cumpre a promessa'
let p = new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel']);
}).then(valor => valor[0])
.then(primeiroElemento)
.then(primeiraLetra)
.then(letraMinuscula)
.then(console.log);