#include <stdio.h>

int sumArray(int array[], const int arrLength) {

    int sum = 0;
    int *pointer;
    int *const finalArray = array + arrLength;

    for(pointer = array; pointer < finalArray; ++pointer) {
        sum += *pointer;
    }

    return sum;
}

int main(void) {

    int sumArray(int array[], const int n);
    int array[10] = {5, 5, 5, 5, 5, 5, 5, 5, 10, 10};

    printf("A soma dos membros do vetor é: %i", sumArray(array, 10));

    getchar();
    return 0;
}