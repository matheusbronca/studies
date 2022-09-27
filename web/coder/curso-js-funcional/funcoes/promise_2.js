// setTimeout(() => {
//   console.log('Executando callback...');
//   setTimeout(() => {
//     console.log('Executando callback 2...');

//     setTimeout(() => {
//       console.log('Executando callback 3...');
//     }, 2000);
//   }, 2000);
// }, 2000);

function waitFor(delay = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('Executando Promise...');
      resolve();
    }, delay);
  });
}

waitFor().then(waitFor).then(waitFor);
