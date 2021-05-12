#include <stdio.h>

int main(void) {

    FILE *myFile;
    myFile = fopen("string.txt", "r");

    if(myFile == NULL) {
        printf("Não foi possível abrir o arquivo.\n");
        getchar();
        return 0;
    }

    char phrase[100];

    while(fgets(phrase, 100, myFile) != NULL) {
        printf("%s", phrase);
    }

    fclose(myFile);
    
    getchar();
    return 0;
}