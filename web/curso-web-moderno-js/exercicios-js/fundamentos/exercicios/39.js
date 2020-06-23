// 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
// primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
// Faça a troca sem utilizar uma variável auxiliarj

const switchArrays = (arr1, arr2) => {
  for (const el of arr1) {
    arr2.push(arr1.shift());
    arr1.push(arr2.shift());
  }

  console.log(arr1);
  console.log(arr2);
};

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

switchArrays(array1, array2);
