#include <stdlib.h>
#include <stdio.h>
#include <math.h>

// Declaração da estrutura
struct point {
    float x;
    float y;
};

// Inicia rotina principal
int main() {
    // Declara duas structs (pontoInicial e pontoFinal) que serão utilizadas nas rotinas seguintes;
    struct point pontoInicial;
    struct point pontoFinal;
    // Protótipo da função showMenu (Responsável por imprimir o Menu de opções);
    void showMenu(struct point pointA, struct point pointB);

    // Invocação da função
    showMenu(pontoInicial, pontoFinal);

    // Fim do programa;
    return 0;
}


void showMenu(struct point pointA,struct point pointB) {
    // Variável que controla a escolha de opções do menu;
    int opt;
    // Protótipo de funções que serão utilizadas nas rotinas seguintes:
    void setPoint(struct point *point);
    float getDistance(struct point pointA, struct point pointB);

    // Prevenção de má comportamento devido ao buffer de entrada e saída;
    setbuf(stdout, NULL);
    setbuf(stdin, NULL);

    // Imprime o Menu na tela;
    system("clear");
    printf("## CALCULE A DISTÂNCIA ENTRE DOIS PONTOS ## \n");
    printf("Selecione uma opção:\n");
    printf("[1] - Digitar valores do primeiro ponto\n");
    printf("[2] - Digitar valores do segundo ponto\n");
    printf("[3] - Mostrar distancia entre os pontos\n");
    printf("[4] - Sair\n");     
    // Atribui valor digitado à variável opt;
    scanf("%d", &opt);

    // Entra na rotina correta de acordo com a variável opt;
    switch(opt) {
        // Rotina padrão para entradas inválidas;
        default:
            printf("Digite uma opção válida \n");
            showMenu(pointA, pointB);
            break;
        case 1:
            // Seta os valores de X e Y de pontoInicial / PontoA;
            setPoint(&pointA);
            showMenu(pointA, pointB);
            break;
        case 2:
            // Seta os valores de X e Y de pontoFinal / PontoB;
            setPoint(&pointB);
            // Retorna ao Menu principal;
            showMenu(pointA, pointB);
            break;
        case 3:
            // Imprime a distancia entre os dois pontos;
            printf("A distância entre os dois pontos é de: %f", getDistance(pointA, pointB));
            printf("\n");
            system("read -p \"Pressione ENTER para calcular novamente\" prosseguir");
            // Retorna ao Menu principal;
            showMenu(pointA, pointB);
            break;
        case 4:
            // Sai do software;
            exit(0);
            break;
    }
} 

// Seta os valores de X e Y de um ponto;
void setPoint(struct point *point) {
    setbuf(stdout, NULL);
    setbuf(stdin, NULL);

    printf("Digite o valor de X do ponto selecionado: \n");
    scanf("%f", &point->x);

    printf("Digite o valor de Y do ponto selecionado: \n");
    scanf("%f", &point->y);

    system("clear");
    printf("Valores atribuídos com sucesso! \n");
    system("read -p \"Pressione ENTER para prosseguir\" prosseguir");
}

// Retorna a distância entre dois pontos;
float getDistance(struct point pointA, struct point pointB) {
    return sqrt(pow(pointA.x - pointB.x, 2) + pow(pointA.y - pointB.y, 2));
}
