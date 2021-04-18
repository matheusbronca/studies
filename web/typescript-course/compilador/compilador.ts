let canal: string = 'Gaveta';
let inscritos: number = 610234;

console.log(canal);

nome = 'Pedro';
console.log(`Nome = ${nome}`);

function soma(a: any, b: any) {
  return a + b;
}

let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'asdjaldk';

function saudar(isManha: boolean): string {
  let saudacao: string;

  if (isManha) {
    saudacao = 'Bom dia!';
  } else {
    saudacao = '';
  }

  return saudacao;
}

console.log(saudar(false));
