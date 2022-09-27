class Produto {
  constructor(nome, preco, desconto) {
    this._nome = nome;
    this._preco = preco;
    this.desconto = desconto;
  }

  get nome() {
    return this._nome;
  }

  set nome(novoNome) {
    this._nome = novoNome.toUpperCase();
  }

  set preco(novoPreco) {
    if (novoPreco >= 0) {
      this._preco = novoPreco;
    }
  }

  get preco() {
    return this._preco;
  }

  get precoFinal() {
    return this.preco * (1 - this.desconto);
  }
}

const p2 = new Produto('Geladeira', 2000, 0.1);
console.log(p2.precoFinal);

p2.nome = 'Freezer';
console.log(p2.nome);
