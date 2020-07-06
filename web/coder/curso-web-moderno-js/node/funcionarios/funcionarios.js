const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

// Desafio: Obter a funcionária de sexo feminino com o menor salário e que resida na China:

axios.get(url).then(response => {
    const funcionarios = response.data;
   const estagiaria = funcionarios
        .filter(funcionario => funcionario.genero === 'F')
        .filter(funcionario => funcionario.pais === 'China')
        .reduce((func, funcAtual) => func.salario < funcAtual.salario ? func : funcAtual);

console.log(estagiaria)
})

