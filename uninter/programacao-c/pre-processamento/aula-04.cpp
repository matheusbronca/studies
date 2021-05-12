#include <stdio.h>

#define PI 3.14159
#define TWO_PI 2 * PI
#define CIRCLE_AREA(radius) radius * radius * PI

int main(void) {

   printf("%f\n", PI );
   printf("%f\n", TWO_PI);
   printf("%f\n", CIRCLE_AREA(10));

    getchar();
    return 0;
}
