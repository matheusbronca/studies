// CLASSE
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
        
    }
}

// FACTORY
const p1 = new Pessoa('João');
p1.falar();

const factoryPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = factoryPessoa('Pedro');
p2.falar();