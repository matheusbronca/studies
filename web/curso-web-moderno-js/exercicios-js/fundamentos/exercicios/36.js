// i36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.

const multiplyArr = (arr, number) => {
    const result = [];

    arr.forEach(element => {
       result.push(element * number);
    });
    return result;
}

console.log(multiplyArr([10, 2, 3, 7], 5));