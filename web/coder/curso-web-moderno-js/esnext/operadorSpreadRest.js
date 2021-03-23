// REST => Juntar
// SPREAD => Espalhar

// SPREAD com objeto;
// "Espalha / Copia" todos os atributos de um objeto para outro.
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone);


// SPREAD com Array:
// "Espalha / Copia" todos os atributos de um array para outro.
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal);
