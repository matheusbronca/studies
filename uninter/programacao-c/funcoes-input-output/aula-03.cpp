#include <stdio.h>

int main() {
    
    char x[100];
    FILE *file = fopen("./arquivo-01.txt", "r");

    int i = 0;

    // EOF => End Of File
    while ((x[i] = fgetc(file)) != EOF) {
        ++i;
    }

    x[i] = '\0';
    printf("%s", x);

    getchar();
    return 0;
}