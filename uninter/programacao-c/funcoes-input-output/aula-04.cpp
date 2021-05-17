#include <stdio.h>

int main(void) {

    char x[] = "Matheus Bronca";
    FILE *myFile = fopen("./arquivo-01.txt", "w");

    // Escreve string "x" no arquivo 'myFile';
    int i = 0;
    while((x[i] != '\0')) {
        fputc(x[i], myFile);
        ++i;
    }

    getchar();
    return 0;
}