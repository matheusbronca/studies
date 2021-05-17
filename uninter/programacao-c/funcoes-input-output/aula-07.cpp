#include <stdio.h>

int main(void) {

    char x;

    while((x = getchar()) != '\n') {
        putchar(x);
    }

    getchar();
    return 0;
}
