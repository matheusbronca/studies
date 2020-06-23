// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros

const calcMedia = arr => {
    const media = arr.reduce((accumulator, currentValue) => accumulator + currentValue ) / arr.length;

    console.log(`A Média Aritmética do array é de: ${media}`);
    
}

calcMedia([10, 10 , 10]);

calcMedia([20, 10 , 50]);