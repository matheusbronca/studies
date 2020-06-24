function MeuObjeto() {}
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();

// Quando se cria um objeto à partir de uma função construtora,
// o prototype do objeto apontará para própria função construtora, e não para Objetct.
console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObjeto.prototype === obj1.prototype);

MeuObjeto.prototype.nome = 'Anônimo';
MeuObjeto.prototype.falar = function () {
  console.log(`Bom dia! Meu nome é ${this.nome}!`);
};

obj1.falar();

obj2.nome = 'Rafael'; // Shadowing;
obj2.falar();

// "Forçando" a herança de MeuObjeto para obj3;
const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype;
obj3.nome = 'Obj3';
obj3.falar();

// Resumindo:
console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);



