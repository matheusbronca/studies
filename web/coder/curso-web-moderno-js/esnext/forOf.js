// forOf ==> Percorre através de ELEMENTOS de um Objeto / Array / Set / Map;
// forIn ==> Percorre através do ÍNDICE de um Objeto / Array;

for (let letra of 'Cod3r') {
  console.log(letra);
}

const assuntosEcma = ['Map', 'Set', 'Promise'];

for (let i in assuntosEcma) {
  console.log(i);
}

for (let assunto of assuntosEcma) {
  console.log(assunto);
}

const assuntosMap = new Map([
  ['Map', { abordado: true }],
  ['Set', { abordado: true }],
  ['Promise', { abordado: false }],
]);

// Percorrer o Map
for (let assunto of assuntosMap) {
  console.log(assunto);
}
// Percorrer somente as chaves do Map
for (let chave of assuntosMap.keys()) {
  console.log(chave);
}
// Percorrer somente os valores do Map
for (let value of assuntosMap.values()) {
  console.log(value);
}
// Percorrer chave e valor do Map
for (let [ch, vl] of assuntosMap.entries() ){
    console.log(ch, vl);
    
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra);
    
}