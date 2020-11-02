#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

int main() {

    char upperPhrases[5][50];
    char file[250];
    FILE *myFile;
    char fileName[20];

    char phrases[5][50];

        for(int i = 0; i < 5; i++) {
            setbuf(stdout, NULL);
            setbuf(stdin, NULL);

            printf("Digite uma frase para armazenar: \n");
            scanf("%[^\n]", phrases[i]);
        }

        for(int i = 0; i < 5; i++) {
            for(int j = 0; j < 50; j++) {
                upperPhrases[i][j] = toupper(phrases[i][j]);
            }
        }

        for(int i = 0; i < 5; i++) {
            printf("%s \n", upperPhrases[i]);
        }

    printf("Forneça o nome do arquivo onde as frases irão ser armazenadas: (máx: 20 caracteres) \n");
    scanf("%s", fileName);


    myFile = fopen(strcat(fileName, ".txt"), "w");

    if(myFile) {
        printf("O Arquivo foi criado \n");
    }
    else {
        printf("Falha ao criar o arquivo");
    }

    for(int i = 0; i < 5; i++) {
        fprintf(myFile, "%s\n", upperPhrases[i]);
    }

    fclose(myFile);

   myFile = fopen(strcat(fileName, ".txt"), "r");

   if(myFile == NULL) {
       return 1;
   }

    if(myFile) {
        printf("O arquivo foi aberto. \n");
    } else {
        printf("Falha em abrir o arquivo. \n");
    }

    int c = 0;

    while( c < 2 ) {
        fscanf(myFile, "%s", file);
        
        printf("%s\n", file);

        c++;
    }

    fclose(myFile);


    return 0;
}
