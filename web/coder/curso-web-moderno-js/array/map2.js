const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de Lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}',
];

// Retornar um Array apenas com os preços:
const prices = carrinho.map(item => JSON.parse(item)).map(item => item.preco);
console.log(prices);
