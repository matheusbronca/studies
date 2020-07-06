Array.prototype.map2 = function (callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }

  return newArray;
};

const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de Lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}',
];

// Retornar um Array apenas com os preços:
const prices = carrinho
  .map2((item) => JSON.parse(item))
  .map2((item) => item.preco);
console.log(prices);
