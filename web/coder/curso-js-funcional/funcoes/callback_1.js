function somarNoTerminal(a, b) {
   return console.log(a + b);
}

function subtrairNoTerminal(a, b) {
    return console.log(a - b);
}

const exec = (fn, a, b) => (fn(a, b));

exec(somarNoTerminal, 56, 38);
exec(subtrairNoTerminal, 182, 27);