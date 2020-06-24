// Object.preventExtensions
// Consegue alterar e excluir atributos existentes,
// porém não permite a adição de NOVOS atributos;
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})
 
console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto);


// Object.seal
// Permite somente a alteração de atributos pré-existentes.
// deleções e atribuições irão ser ignoradas.
const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;

console.log(pessoa);

// Object.freeze
// é o Object.seal + constantes, isto é, nenhuma alteração nos atributos
// será permitida, o objeto fica "congelado";
