// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.

const divisivelPor3 = x => {
    if(x % 3 === 0){
        return console.log('Divísivel');
    }
    return console.log('Indivisível');
    
}

divisivelPor3(30);