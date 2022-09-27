const readline = require('readline');

const getResponse = (question) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (response) => {
      resolve(response);
      rl.close();
    });
  });
};

// Observer
const girlfriend = () => {
  return setTimeout(() => {
    console.log('[ NAMORADA ]: Apagar as luzes');
    console.log('[ NAMORADA ]: Pedir silêncio');
    console.log('[ NAMORADA ]: Surpresa!!!!');
  }, 2000);
};

// Observer
const trustee = (event) => {
  setTimeout(() => {
    console.log(event.response);
    console.log(event.dat);
    console.log(' [ SÍNDICO ]: Monitorando o barulho');
  }, 1000);
};

// Subject
const concierge = async (interested) => {
  while (true) {
    const response = await getResponse('O namorado chegou? (S/N/Q)');

    if (response.toLowerCase() === 's') {
      // Os observers são notificados
      (interested || []).forEach((obs) => obs({ response, date: Date.now() }));
    }
    if (response.toLowerCase() === 'q') {
      break;
    }
  }
};

// Chamada da função => Registra dois observadores
// Os observadores são: A Namorada (Girlfriend) e o Síndico (Trustee)
// O Subject é o Porteiro (Concierge)
concierge([girlfriend, trustee]);
