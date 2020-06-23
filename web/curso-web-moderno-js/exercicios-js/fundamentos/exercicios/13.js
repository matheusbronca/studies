// 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

const isDiaUtil = (weekDay) => {
    switch(weekDay){
        default:
            console.log('Dia útil');
            break;
        case 1:
        case 7:
            console.log('Dia NÃO útil');
            break;
    }
}

isDiaUtil(4);