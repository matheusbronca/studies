// Implementar, em linguagem de programação C, o algoritmo
// de manipulação de listas encadeadas simples que contenha funções para:

// => Inserir no início da lista encadeada simples
// => Inserir no fom da lista encadeada simples
// => Inserir no meio da lista encadeada simples
// => Remover da lista encadeada simples
// => Buscar na lista encadeada simples

#include<stdio.h>
#include<stdlib.h>

int menu();
void insertData_AtTheBeginning(); 

struct SimpleLinkedListElement {
    int data;
    SimpleLinkedListElement *next;
}  *Head;

int main() {
    int option;
    while (1) {
        option = menu();
        switch (option)
        {
        case 1: // Inserir no início da lista
            insertData_AtTheBeginning();
            break;
        
        case 2: // Inserir no meio da lista
            /* code */
            break;
        case 3: // Inserir no final da lista
            /* code */
            break;
        case 4: // Remover da lista
            /* code */
            break;
        case 5: // Buscar na lista
            /* code */
            break;
        case 6:
            return 0;
            break;

        default:
            printf("Opção inválida! \n");
            break;
        }
    }

    return 0;
}

int menu() {
    int option, c;
    system("clear");

    printf("1 - Inserir no início da lista encadeada simples\n");
    printf("2 - Inserir no meio da lista encadeada simples\n");
    printf("3 - Inserir no final da lista encadeada simples\n");
    printf("4 - Remover da lista encadeada simples\n");
    printf("5 - Listar a lista encadeada simples\n");
    printf("6 - Sair do programa\n");
    printf("Digite sua escolha: ");

    scanf("%d", &option);
    fflush(stdin);

    system("clear");
    return option;
}

void insertData_AtTheBeginning() {
    int value;
    printf("Digite o número que deseja inserir:\n");
    scanf("%d", &value);
    fflush(stdin);

    SimpleLinkedListElement *newElement;
    // Alocando o Elemento na memória
    newElement = (struct SimpleLinkedListElement *)
                 malloc(sizeof(struct SimpleLinkedListElement));

    newElement->data = value;

    if(Head == NULL ) {
        Head = newElement;
        Head->next = NULL;
    } else {
        newElement->next = Head;
        Head = newElement;
    }
}

void printLinkedList() {

    SimpleLinkedListElement = *chec

}