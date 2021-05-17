#include <stdio.h>
#include <iostream>
#include <cstdio>
#include <cstring>
#include <cstdio>

int main(void) {

    // gets é uma função INSEGURA, não utilizar!

    char x[10];
    char y[10];

    fgets(x, sizeof(x), stdin);

    printf("%s", x);

    return 0;
}