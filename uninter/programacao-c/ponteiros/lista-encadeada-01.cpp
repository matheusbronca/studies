#include <stdio.h>

int main(void) {

    struct list {
        int value;
        struct list *nextElement;
    };

    struct list m1, m2, m3;
    struct list *hook = &m1;

    m1.value = 10;
    m2.value = 20;
    m3.value = 30;

    m1.nextElement = &m2;
    m2.nextElement = &m3;
    m3.nextElement = (struct list *)0;

    while(hook != (struct list *)0) {
        printf("Valor: %i\n", hook->value);
        hook = hook->nextElement;
    }

    getchar();
    return 0;

};