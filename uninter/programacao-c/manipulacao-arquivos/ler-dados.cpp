#include <stdio.h>

int main(void) {
    
    FILE *myFile;
    myFile = fopen("./file.txt", "r");

    if(myFile == NULL) {
        printf("Arquivo não pode ser aberto.\n");
        
        getchar();
        return 0;
    }

    int x, y, z;

    fscanf(myFile, "%i %i %i", &x, &y, &z);
    printf("%i %i %i\n",x, y, z);

    fclose(myFile);

    getchar();
    return 0;
}
