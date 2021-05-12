#include <stdio.h>
#include <stdlib.h>

int main(void) {

    FILE *myFile;
    myFile = fopen("string.txt", "a");

    if(myFile == NULL) {
        printf("Arquivo não pode ser aberto.");
        getchar();
        return 0;
    }

    fprintf(myFile, "Primeira linha\n");

    char phrase[] = "Segunda linha\n";
    fputs(phrase, myFile);

    char character = '3';
    fputc(character, myFile);

    fclose(myFile);

    getchar();
    return 0;
}