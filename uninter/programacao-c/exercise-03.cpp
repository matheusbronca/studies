#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

int main()
{
    // Ponteiro arquivo
    FILE *myFile;

    // Variáveis
    char upperPhrases[5][50];
    char file[1024];
    char fileName[25];
    char phrases[5][50];

    for (int i = 0; i < 5; i++)
    {
        // Limpa buffers de entrada e saída, prevenindo de comportamentos inesperados;
        setbuf(stdout, NULL);
        setbuf(stdin, NULL);

        // Imprime no console e escaneia o resultado (frases);
        printf("Digite uma frase para armazenar: \n");
        scanf("%[^\n]", phrases[i]);
    }

    // Converte e armazena as frases para MAIUSCULO em um novo array;
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < 50; j++)
        {
            upperPhrases[i][j] = toupper(phrases[i][j]);
        }
    }

    // Imprime no console e escaneia o resultado (nome do arquivo);
    printf("Forneça o nome do arquivo onde as frases irão ser armazenadas: (máx: 20 caracteres) \n");
    scanf("%s", fileName);

    // Aponta o ponteiro para o endereço de memória que contém o arquivo;
    // Abre o arquivo no modo de escrita;
    myFile = fopen(strcat(fileName, ".txt"), "w");

    // Valida se o arquivo conseguiu ou não ser criado;
    if (myFile)
    {
        printf("O Arquivo foi criado \n");
    }
    else
    {
        printf("Falha ao criar o arquivo");
    }

    // Insere as frases digitadas pelo usuário no arquivo correspondente;
    for (int i = 0; i < 5; i++)
    {
        fprintf(myFile, "%s\n", upperPhrases[i]);
    }

    // Fecha a stream de arquivo
    fclose(myFile);
    system("read -p \"Pressione qualquer tecla para prosseguir\" saindo");

    // Reabre o arquivo em modo leitura;
    myFile = fopen(fileName, "r");

    // Checa se o arquivo consegiu ser aberto;
    if(myFile)
    {
        system("clear");
        printf("*O arquivo foi aberto \n\n");
        printf("Conteúdo do arquivo:\n");
    }
    else
    {
        printf("Falha em abrir o arquivo. \n");
    }

    // Enquanto não for o final do arquivo imprime os dados contidos no arquivo aberto no console;
    while (fscanf(myFile, "%s", file) != EOF)
    {
        printf("%s\n", file);
    }

    // Fecha a stream do arquivo;
    fclose(myFile);

    return 0;
}
