"use strict";
// Union - Capactidade de permitir a atribuição de mais de um tipo para mesma variável;
function logDetails(uid, item) {
    console.log("A product with " + uid + " has a title as " + item + ".");
}
logDetails(123, "sapato");
logDetails("123", "sapato");
function logInfo(uid, user) {
    console.log("A user with " + uid + " has a name as " + user + ".");
}
logInfo(123, "William");
logInfo("123", "William");
function renderPlatform(platform) {
    return platform;
}
;
