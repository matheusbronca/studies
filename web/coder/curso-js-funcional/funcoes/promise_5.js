function worksOrNot(value, percentageOfError) {
  return new Promise((resolve, reject) => {
    if (Math.random() < percentageOfError) {
      reject('An error occurred, sorry 👨‍🦲');
    } else {
      resolve(value);
    }
  });
}

worksOrNot('Testando..', 0.5)
  .then((value) => console.log(`Valor: ${value}`))
  .catch((err) => console.log(`Erro: ${err}`));
