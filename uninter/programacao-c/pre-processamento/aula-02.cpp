#include <stdio.h>

#define PI 3.14159
#define NULO 0

double circleArea(double radius);

int main(void) {

    double radius;
    int i = 3;

    while(i != NULO) {
        printf("Digite o raio do círculo: \n");
        scanf("%lf", &radius);
        printf("A area do círcule é %lf\n", circleArea(radius));
        --i;
    }

    getchar();
    return 0;
}

double circleArea(double radius) {
    return radius * radius * PI;
}