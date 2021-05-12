#include <stdio.h>
void variableTest(int value);
void pointerTest(int *pointer_value);

int main(void) {

    int test = 1;
    int *pointer_test = &test;

    // variableTest(test);
    // Para parra o endereço de um ponteiro como argumento de uma
    // função, é necessário retirar o "*", pois se não o valor passado
    // não será o endereço, e sim o valor de referência.
    pointerTest(pointer_test);
    
    printf("%i\n", test);

    getchar();

    return 0;
};

void variableTest(int value) {
    ++value;
}

void pointerTest(int *pointer_value) {
    ++*pointer_value;
}