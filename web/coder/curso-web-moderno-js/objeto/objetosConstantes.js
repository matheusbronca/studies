// Uma constante de um Objeto sempre aponta para um ENDEREÇO de memória,
// por isso é possível alterar seus atributos. Mas não conseguiremos trocar
// para qual endereço ele aponta por meio de uma nova atribuição.;

const pessoa = { nome: 'João' };
pessoa.nome = 'Pedro';
console.log(pessoa);

// pessoa = { nome: 'Ana' };  essa expressão irá gerar um ERRO.
// Pois está atribuindo um novo endereço para o objeto CONSTANTE.

// Para "congelar" um objeto, como em uma constante pura,
// devemos utilizar o método freeze. Pois somente assim,
// podemos prevenir de se alterar os atributos de um objeto.
const newPessoa = Object.freeze({nome: 'Rafaela'});
console.log(newPessoa);
newPessoa.nome = 'Carlos';

