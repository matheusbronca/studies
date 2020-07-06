const moduloA = require('../../moduleA');
console.log(moduloA.ola);

const moduloC = require('./pastaC/')
console.log(moduloC.ola);

const http = require('http');
http.createServer((req, res) => {
    res.write('Olá eu sou o Http Response!');
    res.end();
}).listen(8080);
