#include <stdio.h>

int main (void) {
    
    int x = 10;
    int y = 20;

    // O Ponteiro "*pointer" está apondantado pro endereço de memória x ("&x");
    int *pointer = &x;

    // O *valor* do meu ponteiro é igual a y;
    *pointer = y;

    printf("%i %i\n", x, y); // retorna 20 20
    getchar();

    return 0;
}