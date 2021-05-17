#include <stdio.h>

void cleanBuffer(void);

int main(void) {
    // Maneiras ERRADAS de limpar o buffer:
    // fflush() => Só limpa buffer de sistemas Windows
    // setbuf() => Comportamentos inesperados a depender do S.O

    char a, b, c;
    // Para limpar o buffer de maneira correta, podemos criar nossa
    // própria função, neste caso "cleanBuffer()";

    a = getchar();
    cleanBuffer();

    b = getchar();
    cleanBuffer();
    
    c = getchar();
    cleanBuffer();

    printf("%c", a);
    printf("%c", b);
    printf("%c", c);

    getchar();
    return 0;
}

void cleanBuffer(void) {
    char c;
    while((c = getchar()) != '\n' && c != EOF);
}