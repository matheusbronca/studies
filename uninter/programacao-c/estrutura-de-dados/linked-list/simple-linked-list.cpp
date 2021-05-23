#include <stdio.h>
#include <stdlib.h>

struct node {
  int value;
  struct node *next;
};

typedef struct node node_t;

void printList(node_t *head);
node_t *createNewNode(int value);
node_t *insertAtHead(node_t **head, node_t *node_to_insert);
node_t *findNode(node_t *head, int value);
void *insertAfterNode(node_t *node_to_insert_after, node_t *new_node);

int main(void) {
  node_t *head = NULL;
  node_t *tmp;

  for (int i = 0; i < 25; i++) {
    tmp = createNewNode(i);
    insertAtHead(&head, tmp);
  }

  tmp = findNode(head, 13);
  printf("Found now with value %d\n", tmp->value);

  insertAfterNode(tmp, createNewNode(75));

  printList(head);

  getchar();
  return 0;
}

void printList(node_t *head) {
  node_t *temporary = head;

  while (temporary != NULL) {
    printf("%d - ", temporary->value);
    temporary = temporary->next;
  }

  printf("\n");
}

node_t *createNewNode(int value) {
  node_t *result = (node_t *)malloc(sizeof(node_t));
  result->value = value;
  result->next = NULL;
  return result;
}

node_t *insertAtHead(node_t **head, node_t *node_to_insert) {
  node_to_insert->next = *head;
  *head = node_to_insert;
  return node_to_insert;
}

node_t *findNode(node_t *head, int value) {
  node_t *tmp = head;
  while (tmp != NULL) {
    if (tmp->value == value)
      return tmp;
    tmp = tmp->next;
  }
  return NULL;
}

void *insertAfterNode(node_t *node_to_insert_after, node_t *new_node) {
  new_node->next = node_to_insert_after->next;
  node_to_insert_after->next = new_node;
}