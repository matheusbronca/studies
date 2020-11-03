// Exercício 2:
// Escreva um programa, em LINGUAGEM C, que:
// a) Solicite ao usuário a entrada de um registro que armazene na memória o
// Nome do funcionário e o seu salário.
// b) Utilizando o salário informado calcule o imposto de renda devido e mostre
// na tela, conforme a tabela abaixo

// Até 1637,11 ---- 0;
// De 1637,12 até 2.453,50 ----- 7,5%;
// De 2.453,51 até 3.271,38 ----- 15%;
// De 3.271,39 até 4.087,65 ----- 22,5%;
// Acima de 4.087,65 ----- 27,5%;

#include <stdio.h>
#include <stdlib.h>

// Define as constantes do Software
#define AMOUNT_1 1637.11
#define AMOUNT_2 2453.50
#define AMOUNT_3 3271.38
#define AMOUNT_4 4087.65

#define TAX_A 0
#define TAX_B 7.5
#define TAX_C 15
#define TAX_D 22.5
#define TAX_E 27.5

// Inicia a rotina principal;
int main() {
    // Previne comportamentos inesperados em relação ao bufffer de saída;
    setbuf(stdout, NULL);

    // String que armazena o nome do funcionário;
    char employeeName[50];
    // Variável que armazena o salário do funcionário;
    float wage;

    // Define a função protótipo de getTaxValue;
    float getTaxValue(float wage);

    // Coleta o nome do funcionário;
    printf("Digite o nome do Funcionário: \n");
    scanf("%[^\n]", &*employeeName);

    // Coleta o salário do funcionário;
    printf("Digite o salário do Funcionário: '\n");
    scanf("%f", &wage);

    // Imprime o total de imposto a ser pago:
    system("clear");
    printf("Nome do Funcionário: %s \n", employeeName);
    printf("Salário: %f \n", wage);
    printf("===> TOTAL DE IMPOSTO A SER PAGO: \t %f", getTaxValue(wage));

    return 0;
}

// Retorna o valor de imposto de renda à ser pago;
float getTaxValue(float wage) {
    float tax;
    
    if(wage <= AMOUNT_1) {
       tax = TAX_A; 
    }
    else if(wage > AMOUNT_1 && wage <= AMOUNT_2) {
        tax = TAX_B;
    }
    else if(wage > AMOUNT_2 && wage <= AMOUNT_3) {
        tax = TAX_C;
    }
    else if(wage > AMOUNT_3 && wage <= AMOUNT_4) {
       tax = TAX_D ;
    }
    else {
        tax = TAX_E;
    }
    
    return wage * (tax / 100);
}