#include <stdio.h>

int main(void) {

// Utilizando ponteiros dentro de estruturas
    struct time {
        int *pointer_hour;
        int *pointer_minutes;
        int *pointer_seconds;
    };

    struct time today;

    int hour = 200;
    int minutes = 300;
    int seconds = 400;

    // passando o endereço das variáveis (hour, seconds e minutes)
    // para as pointer contidos na estrutura
    today.pointer_hour = &hour;
    today.pointer_minutes = &minutes;
    today.pointer_seconds = &seconds;

    printf("%i:%i:%i\n\n", *today.pointer_hour, *today.pointer_minutes, *today.pointer_seconds);

    // Alterando valor de referência do ponteiro dentro da struct today;
    *today.pointer_seconds = 1000;

    printf("%i:%i:%i", *today.pointer_hour, *today.pointer_minutes, *today.pointer_seconds);

    getchar();

    return 0;

};