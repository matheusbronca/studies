// Interfaces

// Definição
interface Game {
    title: string;
}

interface DLC {
    extra: string;
}

// Interseçào | extend
interface GameCollection extends Game, DLC {};

// Implements
// class CreateGame implements GameCollection {}

// Declarar função
interface getSimilars {
    (title: string): void;
}

// =============== DIFERENÇAS C/ TYPE ALIAS ============= //

// Não e possível extender de tipos primitivos quando estamos trabalhando com interfaces;
// interface ID extends number {}

// Não é possível usufruir das Tuplas quando utilizamos interfaces,
// o comportamento esperado de uma Tupla não ocorre.
interface Tuple {
    0: number;
    1: number;
};

[1, 2, 3, 4, "Sass"] as Tuple;

// PRINCIPAL DIFERENÇA entre Interfaces e Type Alias
// É possível ter múltiplas declarações, onde ele irá unir todas em uma só;
// VANTAGEM 01: São mais extensíveis e escaláveis, prefira Interfaces ao trabalhar com a criação de libs;
// VANTAGEM 02: Criação de Objetos / Classes em POO (Orientado à Objetos);

interface JQuery {
    a: string;
};

interface JQuery {
    b: string;
};

const $: JQuery = {
    a: "bla",
    b: "foo"
};