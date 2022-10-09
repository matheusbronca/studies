Array.prototype.meuReduce = function(fn, inicial) {
    let acc = inicial;

    for(var i = 0; i < this.length; i++) {
        if(!acc && i === 0){
            acc = this[i];
            continue
        }
        else {
            acc = fn(acc, this[i], i, this);
        }
    }

    return acc;
}

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
];
    
// Filter, Map, Reduce
// 1. fragil: true;
// 2. qtde * preco -> total;
// 3. media totais

const getFragil = item => item.fragil;
const getTotal = item => item.qtde * item.preco;
const getMedia = (acc, item, i, arr) => {
    acc += item;
    // console.log(acc);
    if(i === arr.length - 1) {
        return acc / arr.length;
    }
    else {
        return acc;
    }
     
}

const resultado = carrinho
.filter(getFragil)
.map(getTotal)
.meuReduce(getMedia, 0);

console.log(resultado);
