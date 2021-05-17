#include <stdio.h>
#include <stdlib.h>

struct x {
    int a;
    int b;
    int c;
};

int main(void) {

    // malloc, callofc, realloc #include <stdlib.h>
    int vetor[10]; //10 x 4 bytes = 40 bytes;

    struct x estrutura; // 3 x 4 = 12 bytes;


    printf("%li\n", sizeof(vetor));
    printf("%li\n", sizeof(estrutura));

    getchar();
    return 0;
}