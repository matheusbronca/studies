// Functors são objetos que implementam a função MAP,
// para a transformação de valores internos
// Também é um "wrapper de um valor"

function TipoSeguro(value) {
  return {
    value,
    invalido() {
      this.value === null || this.value === undefined;
    },
    map(fn) {
      if (this.invalido()) {
        return TipoSeguro(null);
      }
      return TipoSeguro(fn(this.value));
    },
  };
}

const resultado = TipoSeguro('Texto aqui')
  .map((texto) => texto.toUpperCase())
  .map((texto) => `${texto}!!!!!`)
  .map((texto) => texto.split('').join(' '));
console.log(resultado.value);

const resultadoNull = TipoSeguro(null);
console.log(resultadoNull.value)