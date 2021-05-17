#include <stdio.h>
#include <stdlib.h>

int main(void) {

    // Cria-se um pointeiro "pointer", e através da função 
    // malloc reserva-se o tamanho de "int" para ele.
    // A função malloc sempre retorna um ponteiro genérico do tipo
    // void, por isso precisamos fazer um casting (int *) para
    // forçar que o valor retornado seja do mesmo tipo que o tipo
    // explilcitado na declaraçào do ponteiro;

    // Caso a função malloc não consiga alocar memória suficiente,
    // ela retornará NULL;
    int *pointer = (int *)malloc(sizeof(int));

    if(pointer == NULL) {
        printf("malloc não conseguiu alocar memória suficiente");
    }

    printf("%i", *pointer);

    // A função free() serve para liberar memória que foi alocado
    // anteriormente por uma função malloc() por exemplo:
    // A função free() somente DESALOCA, ela não apagada dados escritos
    // na memória!
    // O valor de pointer também continuará apontando pro mesmo endereço
    // da memória, a função free não "apaga" o ponteiro;
    free(pointer);
    printf("%i", *pointer);

    // int *pointer2 = (int *)malloc(sizeof(int));

    getchar();
    return 0;
}