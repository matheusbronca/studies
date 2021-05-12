#include <stdio.h>

int main(void) {

    int array[3] = {1, 2, 3};
    
    // Ponteiro apontando o último membro do Array:
    // int *pointerArray = &array[2];

    // Ponteiro apontando o primeiro membro do Array;
    int *pointerArray = &array[0];

    // Alterando o segundo indíce do vetor;
    *(pointerArray + 1) = 10;

    printf("%i\n", array[1]);

    getchar();
    return 0;
}