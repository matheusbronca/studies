function Produto(nome, preco, desconto = 0.15) {
  this.nome = nome;
  this.preco = preco;
  this._desconto = desconto;

  this.precoFinal = () => this.preco * (1 - this._desconto);
}

Produto.prototype.log = function () {
  return console.log(`Nome: ${this.nome} | Preço: ${this.preco}`);
};

Object.defineProperty(Produto.prototype, 'desconto', {
  get: function () {
    return this._desconto;
  },
  set: function (novoDesconto) {
    if (novoDesconto >= 0 && novoDesconto <= 1) {
      this._desconto = novoDesconto;
    }
  },
});

Object.defineProperty(Produto.prototype, 'descontoString', {
  get: function () {
    return `${this._desconto * 100}%`;
  },
});

const p1 = new Produto('Caneta', 8.59);
const p2 = new Produto('Geladeira', 2345.98);

console.log(p2.precoFinal());

const p3 = new Produto('Freezer', 1000);
p3.log();
console.log(p3.descontoString);
p3.desconto = 3;
console.log(p3.desconto);
p3.desconto = 0.9;
console.log(p3.desconto);
