// 19) O cardápio de uma lanchonete é o seguinte:
// Código Descrição do Produto Preço
// 100 Cachorro Quente R$ 3,00
// 200 Hambúrguer Simples R$ 4,00
// 300 Cheeseburguer R$ 5,50
// 400 Bauru R$ 7,50
// 500 Refrigerante R$ 3,50
// 600 Suco R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.

const calcTotal = (codigo, qtd) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const products = {
    100: {
      descricao: 'Cachorro-Quente',
      preco: 3,
    },
    200: {
      descricao: 'Hambúrguer Simples',
      preco: 4,
    },
    300: {
      descricao: 'Cheeseburguer',
      preco: 5.5,
    },
    400: {
      descricao: 'Bauru',
      preco: 7.5,
    },
    500: {
      descricao: 'Refrigerante',
      preco: 3.5,
    },
    600: {
      descricao: 'Suco',
      preco: 2.8,
    },
  };

  switch (codigo) {
    default:
      console.log('Produto não existente. Insira um código válido');

    case 100:
      console.log(
        `Descrição: ${products[codigo].descricao} | Quantidade: ${qtd}`
      );
      console.log(
        `============> Total: ${formatter.format(qtd * products[codigo].preco)}`
      );
      break;

    case 200:
      console.log(
        `Descrição: ${products[codigo].descricao} | Quantidade: ${qtd}`
      );
      console.log(
        `============> Total: ${formatter.format(qtd * products[codigo].preco)}`
      );
      break;

    case 300:
      console.log(
        `Descrição: ${products[codigo].descricao} | Quantidade: ${qtd}`
      );
      console.log(
        `============> Total: ${formatter.format(qtd * products[codigo].preco)}`
      );
      break;

    case 400:
      console.log(
        `Descrição: ${products[codigo].descricao} | Quantidade: ${qtd}`
      );
      console.log(
        `============> Total: ${formatter.format(qtd * products[codigo].preco)}`
      );
      break;

    case 500:
      console.log(
        `Descrição: ${products[codigo].descricao} | Quantidade: ${qtd}`
      );
      console.log(
        `============> Total: ${formatter.format(qtd * products[codigo].preco)}`
      );
      break;

    case 600:
      console.log(
        `Descrição: ${products[codigo].descricao} | Quantidade: ${qtd}`
      );
      console.log(
        `============> Total: ${formatter.format(qtd * products[codigo].preco)}`
      );
      break;
  }
};

calcTotal(100, 3);
calcTotal(200, 3);
calcTotal(300, 3);
calcTotal(400, 3);
calcTotal(500, 3);
calcTotal(600, 3);
