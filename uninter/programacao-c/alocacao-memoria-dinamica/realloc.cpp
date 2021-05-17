#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void) {

    // A função realloc permite que possamos realocar um novo espaço 
    // para um array / estrutura de dados, possibilitando assim, vetores
    // e estruturas mais flexíveis (expandíveis). É importante ressaltar
    // que a função realloc não aumenta de fato o vetor, mas copia o
    // conteúdo já escrito do vetor atual para um novo espaço de memória
    // com um tamanho alocado maior.

    // O novo espaço disponível não vem limpo, pode conter lixo na memória.

    int i, size, *array;

    printf("Digite o tamanho do vetor: \n");
    scanf("%d", &size);
    srand(time(NULL));

    array = (int *) calloc(size, sizeof(int));

    if(array) {
        printf("\nMemória alocada com sucesso!\n");

        for(i = 0; i < size; i++) {
            *(array + i) = rand() % 100;
            printf("%d ", *(array + i));
            printf("\n");
        }
            
        printf("Digite um novo tamanho para o vetor: \n");
        scanf("%d", &size);

        for(i = 0; i < size; i++) {
            printf("%d ", *(array + i));
            printf("\n");
        }

    } else {
        printf("Não há espaço suficiente para alocação de memória.");
    }

    getchar();
    return 0;
}