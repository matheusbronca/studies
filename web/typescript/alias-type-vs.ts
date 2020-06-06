// Type Alias

// Definição
type GameT = {
    title: string;
};

type DLCT = {
    extra: string;
};

// Intersection

type GameCollectionT = Game & DLCT;

// Implements
// class CreateGameT implements GameCollection {};

// Declarar função
type getSimilarT = (title: string) => void;

// ============= DIFERENÇAS C/ INTERFACE =========== //

// Permite declarar tipos primitivos
type IDT = string | number;

// Permite declarar Tuplas normalmente, sem efeitos colaterais;
type TupleT = [ number, number];

[1, 2]  as TupleT;

// PRINCIPAL DIFERENÇA entre Type Alias e Interfaces
// O Type Alias permite apenas uma declaraçào por escopo;
// VANTAGEM: Mais simples, o mais recomendado na maioria das vezes.
// REACT - Props;
// O mais importante é manter a consistência entre os Projetos. se o projeto utiliza somente
// interfaces, continue utilizando somente as interfaces;
// type jQueryT = {a: string};
// type jQueryT = {b: string};