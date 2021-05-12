#include <stdio.h>

#define SIM 100
#define NAO -100

int main(void) {

    int x;
    printf("Digite um número inteiro: ");
    scanf("%i", &x);

    if(x <= 10) {
        printf("%i", NAO);
    } else {
        printf("%i", SIM);
    }

    getchar();
    return 0;
}