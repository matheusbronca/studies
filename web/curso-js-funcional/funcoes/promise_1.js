let a = 1;
console.log(a);

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa({
        x: 3,
        y: 4
    });
});

// O Then SEMPRE recebe APENAS UM PARÂMETRO;
p.then(function(valor) {
    console.log(valor);
})