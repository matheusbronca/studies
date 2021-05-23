// Implementar, em linguagem de programação C, o algoritmo
// de manipulação de listas encadeadas simples que contenha funções para:

// => Inserir no início da lista encadeada simples
// => Inserir no fom da lista encadeada simples
// => Inserir no meio da lista encadeada simples
// => Remover da lista encadeada simples
// => Buscar na lista encadeada simples

#include <stdio.h>
#include <stdlib.h>

int menu();
void insertData_AtTheBeginning();
void printLinkedList();
void clearBuffer();
void clearConsole(void) { printf("\e[1;1H\e[2J"); }

struct SimpleLinkedListElement {
  int data;
  SimpleLinkedListElement *next;
} * Head;

int main() {
  int option;
  Head = NULL;

  while (1) {
    option = menu();
    switch (option) {
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
    case 5: //  Mostrar toda a lista ;
      printLinkedList();
      break;
    case 6:
      return 0;
      break;

    default:
      printf("Opção inválida! \n");
      getchar();
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
  printf("\n===> Digite a opção desejada: ");

  scanf("%d", &option);
  clearBuffer();

  clearConsole();
  return option;
}

void insertData_AtTheBeginning() {
  int value;
  printf("Digite o número que deseja inserir:\n");
  scanf("%d", &value);
  clearBuffer();

  SimpleLinkedListElement *newElement;
  // Alocando o Elemento na memória
  newElement = (struct SimpleLinkedListElement *)malloc(
      sizeof(struct SimpleLinkedListElement));

  newElement->data = value;

  if (Head == NULL) {
    Head = newElement;
    Head->next = NULL;
  } else {
    newElement->next = Head;
    Head = newElement;
  }
}

void insertData_atTheEnd() {
  int value;
  printf("Digite o número que deseja inserir:\n");
  scanf("%d", &value);
  clearBuffer();

  SimpleLinkedListElement *newElement;
  SimpleLinkedListElement *scanElement;

  newElement =
      (SimpleLinkedListElement *)malloc(sizeof(SimpleLinkedListElement));
  scanElement =
      (SimpleLinkedListElement *)malloc(sizeof(SimpleLinkedListElement));

  newElement->data = value;
  if (Head == NULL) {
    Head = newElement;
    Head->next = NULL;
  } else {
    scanElement = Head;
    while (scanElement->next != NULL)
      scanElement = scanElement->next;

    scanElement->next = newElement;
    newElement->next = NULL;
  }
}

void printLinkedList() {
  SimpleLinkedListElement *scanElement;
  scanElement = (struct SimpleLinkedListElement *)(malloc(
      sizeof(struct SimpleLinkedListElement)));

  scanElement = Head;
  if (scanElement == NULL) {
    return;
  }

  while (scanElement != NULL) {
    printf("%d\n", scanElement->data);
    scanElement = scanElement->next;
  }
  printf("\n");

  getchar();
  return;
}

void clearBuffer() {
  char c;
  while ((c = getchar() != '\n' && c != EOF)) {
  }
}
