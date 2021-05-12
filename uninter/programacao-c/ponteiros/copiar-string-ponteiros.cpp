#include <stdio.h>

void copyString(char *copyFromHere, char *pasteHere) {
    while(*copyFromHere != '\0') {
       *pasteHere = *copyFromHere;
       ++copyFromHere;
       ++pasteHere;
    }

    // Manualmente seta o caractere nulo como último dígito do Array
    // Para que o programa reconheça que a string chegou ao fim
    // e não imprima caracteres indesejados;
    *pasteHere = '\0';
}

int main (void) {
    void copyString(char *copyFromHere, char *pasteHere);

    char string1[] = "Pão com mortadela";
    char string2[20];

    copyString(string1, string2);
    printf("%s\n", string2);

    getchar();
    return 0;
}