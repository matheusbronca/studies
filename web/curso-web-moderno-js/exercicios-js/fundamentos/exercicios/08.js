// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).
// Obs.: O primeiro jogo não conta como novo recorde do melhor.
// Exemplo:
// String: “10 20 20 8 25 3 0 30 1”
// Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
// aconteceu no sétimo jogo.)

const points = '20 10 29 39 38';

console.log( points.split(' ') );

const calcRecords = (points) => {
    const pts = points.split(' ')
    let lastBest = 0;
    const arrPts = [];

    pts.forEach((pt, i) => {
       if (i > 0 && pt > lastBest) {
           lastBest = pt;
           arrPts.push(lastBest);
       }
    });

    return [arrPts.length, Math.min.apply(null, pts)];
}

console.log(calcRecords('20 30 12 25 49'));


