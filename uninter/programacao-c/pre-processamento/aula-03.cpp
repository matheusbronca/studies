#include <stdio.h>

#define MAX_NUMBER 1000

int main(void) {

    void otherFunction(void);
    void function(void);

    // printf("%i\n", 1000);
    printf("%i\n", MAX_NUMBER);
    function();
    otherFunction();


    getchar();
    return 0;
}

void function(void) {
    // printf("%i\n", 1000);
    printf("%i\n", MAX_NUMBER);
}

void otherFunction(void) {
    // printf("%i", 1000);
    printf("%i\n", MAX_NUMBER);
}