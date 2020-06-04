// boolean (true / false)
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 0xfff;

// array (type[])
let items: string[];
items = ["foo", "bar"];

let values: Array<number>;
values = [1, 2, 3];

// tuple
let title: [number, string, string];
title = [1, "foo", "bar"];

// enum
enum Colors {
    white = '#fff',
    black = '#000'
};

// any (qualquer tipo) NÃO UTILIZAR
let thing: any;
thing = [1];

// void (vazio)
function logger(): void {
    console.log('foo');
};

// null | undefined (NÃO UTILIZAR COMO TIPO PRIMITIVO);
type Bla = string | undefined;

// never (Nunca retorna)
function error(): never {
    throw new Error("error");
};

// object (QUALQUER COISA QUE NÃO SE ENCAIXE EM ALGUM DOS TIPOS PRIMITIVOS DISPONÍVEIS)
let cart: object;

cart = {
    speedUnit: "Miles"
};
