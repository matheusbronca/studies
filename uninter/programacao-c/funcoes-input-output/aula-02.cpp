#include <stdio.h>

int main() {

    char x[100];
    FILE *myFile = fopen("arquivo-01.txt", "r");

    // fgetc => É SEMPRE executada como uma FUNÇÃO;
    // getc => Pode ser executada como uma MACRO, mas também pode
    // ser executada como uma função.

    // Lendo uma string através de caracters:
    int i = 0;
    while ((x[i] = fgetc(stdin)) != '\n') {
        ++i;
    }

    // Insere o caractere especial que indica o fim de uma string.
    // Caso não seja inserido, ao imprimir a saída de dados, lixo
    // de memória também será impresso.
    x[++i] = '\0';
    printf("%s", x);

    getchar();
    return 0;
}