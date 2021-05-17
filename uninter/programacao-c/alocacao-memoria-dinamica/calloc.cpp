#include <stdio.h>
#include <stdlib.h>

int main(void) {

    // Diferente da função malloc() que não altera os lixos
    // que ficam na memória, a função calloc() inicializa todos
    // os endereços alocados para o valor 0 (zero);

    // Aloca 10 espaços de memória do tamanho int;
    int *pointer = (int *) calloc(10, sizeof(int));

    // Um ponteiro é um vetor, neste caso como alocamos 10 espaços
    // do tipo int, teremos um vetor com 10 elementos, cada um aponta
    // para o endereço inicial de cada "parte alocada";
    *(pointer + 1) = 10;

    // printf("%i\n", *(pointer + 1));
    // OUT
    // printf("%i\n", pointer[1]);

    int i;
    for (i = 0; i < 10; ++i) {
        printf("Endereço de pointer[%i] = %p | Valor de pointer[%i] = %i\n",
        i, &pointer[i], i, pointer[i]);
    }

    getchar();
    return 0;
}
