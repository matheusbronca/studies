"use strict";
// INTERFACES: Normalmente utilizadas para descrever objetos mais COMPLEXOS;
// aceita MODIFIERS;
// pode ser implementada por uma CLASSE; 
// aceita a utilização de UNIONS.
var theLastOfUs = {
    title: "The Last of Us",
    description: "The best game in the world",
    genre: "Action",
    platform: ["Playstation 3", "Playstation 4"],
    getSimilars: function (title) {
        console.log("Similar gamees to " + title + ": Uncharted, A Plague Tale, Metro");
    }
};
if (theLastOfUs.getSimilars) {
    theLastOfUs.getSimilars(theLastOfUs.title);
}
// const leftBehind: DLC = {
//     title: "The Last of US - Left Behind",
//     description: "You play as Ellie before the original game",
//     genre: "Action",
//     platform: ["Playstation 4"],
//     originalGame: theLastOfUs,
//     newContent: ["3 hours story", "new characters"],
// }
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
