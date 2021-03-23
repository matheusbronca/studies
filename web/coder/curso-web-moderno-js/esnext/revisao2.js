// Arrow Function
const soma = (a, b) => a + b; // Funcões Arrow são SEMPRE anônimas!!!
console.log(soma(2, 3)); // Retorna 5

// Arrow Function (this)
// Não é possível alterar o contexto do this em arrow functions
// o contexto do this sempre estará relacionado ao escopo em que a função foi declarada.
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

// Parâmetros Default
function log(text = 'Node') {
  console.log(text);
}
log();
log('Sou mais forte');

// Operador REST
// adiciona a capacidade de se passar parâmetros "infinitos",
// estes serão agrupados em um array internamente na função.
function total(...numeros) {
    let total = 0;
    numeros.forEach(n => total += n);
    return total;
}

console.log(total(2, 3, 4, 5));
