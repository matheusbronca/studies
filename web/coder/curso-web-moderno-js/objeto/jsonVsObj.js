const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c}}; 
console.log(JSON.stringify(obj));

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")); GERARÁ UM ERRO
// JSON tem o pré-requisito de cada atributo ter que ser englobado por aspas duplas "";
// JSON aceita valores em INT, FLOAT, BOOLEAN, STRING, OBJECT e ARRAYS
// Strings também precisam ser delimitadas por aspas duplas;
console.log(JSON.parse('{ "a": 1, "b": 2.6 , "c": true, "d": "string"  }'));


