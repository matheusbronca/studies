// CLOSURE ==> É o escopo criado quando uma função é declarada;
// Esse escopo permite a função acessar e manipular variáveis externas à função;
// Sempre que uma função é chamada, ela leva consigo seu contexto (contexto onde ela foi declarada pela primeira vez);

const x = 'Global';

function fora() {
    const x = 'Local';
    function dentro() {
        return x;
    }
    return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao()); //Retorna "Local"
