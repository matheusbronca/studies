// Promisse ==> Processamento Assíncrono
// Pode ser "Atendida" ou "Rejeitada"

function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase); // IMPORTANTE ==> O RESOLVE só aceita um ÚNICO PARÂMETRO
    }, segundos * 1000);
  });
}

falarDepoisDe(2, 'Olá, eu sou uma Promisse resolvida!')
  .then((frase) => frase.concat('!!!'))
  .then((outraFrase) => console.log(outraFrase))
  .catch((e) => console.log(e));
