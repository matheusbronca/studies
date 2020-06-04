// Union - Capactidade de permitir a atribuição de mais de um tipo para mesma variável;
function logDetails(uid: number | string, item: string) {
    console.log(`A product with ${uid} has a title as ${item}.`);
}

logDetails(123, "sapato");
logDetails("123", "sapato");

// Type alias, reaproveita os unions (é como criar um tipo composto);
type Uid = number | string;

function logInfo(uid: Uid, user: string) {
    console.log(`A user with ${uid} has a name as ${user}.`);
}

logInfo(123, "William");
logInfo("123", "William");

// Outra utilidade do type, é criar tipos fixos:
type Platform =  "Windows" | "Linux" | "Mac OS";

function renderPlatform(platform: Platform) { 
    return platform;
};
