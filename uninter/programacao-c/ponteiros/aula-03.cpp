#include <stdio.h>

int main(void) {

    struct time {
        int hour;
        int minutes;
        int seconds;
    };

    struct time now, *after;
    after = &now;


    // (*after).hour = 20;
    // (*after).minutes = 20;
    // (*after).seconds = 20;

    // Essa maneira de escrever tem o mesmo efeito que as declarações
    // acima, porém com sintaxe resuzida ( o que é melhor ).
    after->hour = 20;
    after->minutes = 80;
    after->seconds = 50;

    int sum = 100;
    
    struct time before;
    before.hour = sum + after->seconds;
    before.minutes = now.hour + after->minutes;
    before.seconds = after->minutes + after->seconds;

    printf("%i:%i:%i", before.hour, before.minutes, before.seconds);

    getchar();
    
    return 0;
}