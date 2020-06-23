const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13,
};

// Object.keys ==> Retonar as CHAVES de um Objeto [ array ];
console.log(Object.keys(pessoa));

// Object.values ==? Retorna os VALORES de um Objeto [ array ];
console.log(Object.values(pessoa));

// Object.entries ==> Retorna uma Array com as CHAVES e outro Array com os VALORES [ array ]
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

// Define uma propriedade de um objeto de maneira mais detalhada,
// possibilitando congelar APENAS a propriedade, e decidir se ela irá
// ser listada em métodos através de 'enumerable';
Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '01/01/2019',
});

pessoa.dataNascimento = '01/01/2017';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMASCript 2015);
// Recebe um objeto de destino (primeiro parâmetro)
// e concatena as propriedades dos objetos dos próximos parâmetros,
// no objeto destino, inclusive sobrescrevendo propriedades iguais (De mesmo nome);
const dest = { a: 1 };
const object1 = { b: 2 };
const object2 = { c: 3, a: 4 };
const obj = Object.assign(dest, object1, object2);

Object.freeze(obj);
obj.c = 1234;
console.log(dest);
