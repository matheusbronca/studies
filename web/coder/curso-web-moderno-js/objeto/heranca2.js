// Cadeia de protótipos
Object.prototype.attr0 = '0'; // Não faça isso!!
const avo = { attr: 'A'};
const pai = { __proto__: avo, attr2: 'B', attr3: 'Atributo 3'}
const filho = { __proto__: pai, attr3: 'C'};

console.log(filho.attr0, filho.attr, filho.attr2, filho.attr3);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual = delta;
        }
        else {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h.`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 340 // shadowing
};

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
};

// setPrototypeOf é equivalente a atribuiçãp do __prototype__,
// também possui o mesmo comportamento.
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(400);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());


