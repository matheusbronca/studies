console.log(this === global); // FALSE
console.log(this === module); // FALSE

console.log(this === module.exports); // TRUE
console.log(this === exports);  // TRUE

function logThis() {
    console.log('Dentro de uma função....');
    console.log(this === exports); // FALSE
    console.log(this === module.exports); // FALSE
    console.log(this === global); // TRUE
    
    // disponível em GlOBAL:
    this.perigo = '...'; // CUIDADO, essa atribuição deixar 'perigo'disponível globalmente.
}

logThis();
