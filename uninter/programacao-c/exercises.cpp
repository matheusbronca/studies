#include <stdlib.h>
#include <stdio.h>

using namespace std;

void resetMatrix(int row,int col, int matrix) {

    for(row = 0; row < 3; row++) {
        for(col = 0; col < 3; col++) {
            matrix[row][col] = 0;
        }
    }

}

int main() {
    int matrix[3][3];
    int col, row;

    resetMatrix(row, col, matrix[row][]);

    return 0;
}