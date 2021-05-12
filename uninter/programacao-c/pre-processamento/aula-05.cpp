#include <stdio.h>

#define BIGGEST(x, y) x > y ? x : y
#define IS_LOWERCASE(char) char >= 'a' && char <= 'z'

int main(void) {
    
    char x = 'A';

    if(IS_LOWERCASE(x)) {
        printf("É uma letra minúscula\n");
    } else {
        printf("Não é uma letra minúscula\n");

    }

    printf("%i\n", BIGGEST(100, 50));

    getchar();
    return 0;
}