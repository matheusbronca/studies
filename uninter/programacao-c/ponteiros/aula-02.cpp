#include <stdio.h>
#include <stdlib.h>

int main (void) {
    
    int x = 10;
    double y = 20.50;
    char z = 'a';

    int *pointer_x = &x;
    double *pointer_y = &y;
    char *pointer_z = &z;

    double sum = *pointer_x + *pointer_y;

    printf("Endereço de x = %p\nValor referência de x = %i\n\n",
            (void*)pointer_x, *pointer_x);

    printf("Endereço de y = %p\nValor referência de y = %f\n\n",
            (void*)pointer_y, *pointer_y);

    printf("Endereço de z = %p\nValor referência de z = %c\n\n",
            (void*)pointer_z, *pointer_z);

    printf("O Valor da soma entre x e y é = %f\n\n", sum);

    getchar();

    return 0;
}