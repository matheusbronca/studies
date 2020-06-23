// 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
// de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
// idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130

const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
}) 

const calcConvenio = age => {
    if (age < 0 || age > 110) {
        console.log('Insira um idade válida');
        
    }
    else if(age < 10) {
        console.log(`Valor do Convenio: ${formatter.format(100 + 80)}`);
    }
    else if(age >= 10 && age <= 30) {
        console.log(`Valor do Convenio: ${formatter.format(100 + 50)}`);
    }
    else if(age > 30 && age <= 60) {
        console.log(`Valor do Convenio: ${formatter.format(100 + 95)}`);
    }
    else {
        console.log(`Valor do Convenio: ${formatter.format(100 + 130)}`);
    }
}

calcConvenio(31);