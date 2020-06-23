// 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.

const countInterval = array => {
    let inInterval = 0;
    let outInterval = 0;

    const interval = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < interval.length; j++) {
            if(array[i] === interval[j]) {
                inInterval++;
            }
        }
    }

    outInterval = array.length - inInterval;

    console.log(`${inInterval} números estão dentro do intervalo de [10 a 20].`);
    console.log(`${outInterval} números estão fora do intervalo de [10 a 20]`);
}

countInterval([1, 2, 3, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
