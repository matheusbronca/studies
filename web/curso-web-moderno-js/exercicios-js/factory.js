// FACTORY ==> Uma "fábrica de objetos", é uma função que sempre retorna um objeto;

// Factory simples
function criarPessoa() {
    return { nome: 'Ana', sobrenome: 'Silva' }
}

console.log(criarPessoa());

// Factory flexível (com parâmetros);
function criarProduto(nome, qtde = 0, preco) {
    return {
        nome: nome,
        qtde: qtde,
        preco: preco
    }
}

console.log(criarProduto('Ferro de Passar', 2, 55.99));
