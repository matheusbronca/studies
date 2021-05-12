#include <stdio.h>

int main(void) {
    
    FILE *file;

    // Primeiro argumento (SRC), segundo ("w", "r", "a")
    // w -> write, r -> read, a - append
    file = fopen("./file.txt", "w");
    fprintf(file, "HAISHASHUIAS");

    // Salvar e fechar o arquivo;
    fclose(file);
    
    getchar();
    return 0;
}