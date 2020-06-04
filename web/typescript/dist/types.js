"use strict";
// boolean (true / false)
var isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
// number (int, float, hex, binary)
var total;
total = 0xfff;
// array (type[])
var items;
items = ["foo", "bar"];
var values;
values = [1, 2, 3];
// tuple
var title;
title = [1, "foo", "bar"];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
;
// any (qualquer tipo) NÃO UTILIZAR
var thing;
thing = [1];
// void (vazio)
function logger() {
    console.log('foo');
}
;
// never (Nunca retorna)
function error() {
    throw new Error("error");
}
;
// object (QUALQUER COISA QUE NÃO SE ENCAIXE EM ALGUM DOS TIPOS PRIMITIVOS DISPONÍVEIS)
var cart;
cart = {
    speedUnit: "Miles"
};
// Type inference
// Nem sempre é necessário tipar absolutamente tudo, o compilador consegue tipar automaticamente através da inferência;
var message2 = "mensagem definida";
message2 = "string nova";
window.addEventListener("click", function (e) {
    console.log(e.target);
});
