// 37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
// como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
// bem como a soma dos elementos.

const progressaoAritmetica = (a1, n, r) => {
    const pa =    a1 + (n - 1) * r;
    const somaPa = ((a1 + pa) * n) / 2;

    console.log(`Progressão Aritmética ${pa}`);
    console.log(`Soma de (${n}) termos ${somaPa}`);
    
}

const progressaoGeometrica = (a1, n, r) => {
  const pg = a1 * Math.pow(r, (n - 1));  
  const somaPg = ( a1 * (1 - Math.pow(r, n))) / (1 - r);

  console.log(`Progressàp Geométrica ${pg}`);
  console.log(`Soma de (${n}) termos ${somaPg}`);
  
} 

progressaoAritmetica(9, 8, 2);
progressaoGeometrica(9, 8, 2);
