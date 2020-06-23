// 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.


// Verifica se existem palavras iguais entres as strings de parâmetro;
const containsSameString = (string1, string2) => {
    const wordsString1 = string1.split(' ');    
    const wordsString2 = string2.split(' ');

    for (let i = 0; i < wordsString1.length; i++) {
        
        for (let j = 0; j < wordsString2.length; j++) {
           if(wordsString1[i] === wordsString2[j]) {
               return true;
           }
           else {
               return false;
           }
        }
    }
}

const result = containsSameString('Eu amo a Monice', 'Eu adoro você');
// console.log(result);


// Verifica se todos os caracteres estão contidos em ambas strings:

const containsSameChar = (string1, string2) => {
    const chars1 = string1.toLowerCase()
    .split('')
    .filter(word => word !== ' ')
    .filter((char, index, arr) => {
        return arr.indexOf(char) == index;
    });

    const chars2 = string2.toLowerCase()
    .split('')
    .filter(word => word !== ' ')
    .filter((char, index, arr) => {
        return arr.indexOf(char) == index;
    });


    console.log(chars1);
    
    console.log(chars2);
    
    for (const char of chars1) {

    let charExist = true;

       for (const char2 of chars2) {
          if(char !== char2) {
            charExist = false;
          }
          else {
              charExist = true;
          }

          if(char2 === chars2[chars2.length -1] && charExist === false) {
              return false;
          }
       } 

       return true;
    }
}

containsSameChar('Eu atirei o pau no gato', 'Mas ele não morreu');

console.log(containsSameChar('amor', 'romas'));
