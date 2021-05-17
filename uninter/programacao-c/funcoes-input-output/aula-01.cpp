#include <stdio.h>

int main() {
    
    char x[100];
    FILE *file = fopen("./arquivo-01.txt", "r");

    fgets(x, 100, file);
    printf("%s\n", x);
    
    // freopen muda / redireciona para onde o ponteiro file / stdin aponta.
    freopen("./arquivo-02.txt", "r", file);
    fgets(x, 100, file);
    printf("%s\n", x);

    getchar();
    return 0;
}