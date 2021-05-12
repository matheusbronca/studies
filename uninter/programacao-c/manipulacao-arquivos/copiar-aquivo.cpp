#include <stdio.h>

int main(void) {

    void copyContent(FILE *file1, FILE *file2);

    FILE *file1 = fopen("./string.txt", "r");
    FILE *file2 = fopen("./copyString.txt", "w");

    if(file1 == NULL) {
        printf("Não foi possível abrir o arquivo.\n");

        getchar();
        return 0;
    }

    copyContent(file1, file2);
    fclose(file1);
    fclose(file2);
    
    getchar();
    return 0;
}

void copyContent(FILE *file1, FILE *file2) {
    char reader[1000];

    while(fgets(reader, 1000, file1) != NULL) {
        fputs(reader, file2);
    }
}