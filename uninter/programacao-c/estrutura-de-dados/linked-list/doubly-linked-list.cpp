#include <stdio.h>
#include <stdlib.h>

struct node {
  int value;
  struct node *next;
  struct node *prev;
};

typedef struct node node_t;

node_t *createNewNode(int value);
node_t *insertAtHead(node_t **head, node_t *node_to_insert);
node_t *findNode(node_t *head, int value);
node_t *insertAfterNode(node_t *node_to_insert_after, node_t *new_node);
void remove_node(node_t **head, node_t *node_to_remove);
void printList(node_t *head);

int main(void) {

  node_t *head = NULL;
  node_t *tmp;

  for (int i = 0; i < 12; i++) {
    tmp = createNewNode(i);
    insertAtHead(&head, tmp);
  }

  tmp = findNode(head, 10);
  insertAfterNode(tmp, createNewNode(77));

  printList(head);

  remove_node(&head, tmp);
  remove_node(&head, head);

  printList(head);

  getchar();
  return 0;
}

node_t *createNewNode(int value) {
  node_t *result = (node_t *)malloc(sizeof(node_t));
  result->value = value;
  result->next = NULL;
  result->prev = NULL;
  return result;
}

node_t *insertAtHead(node_t **head, node_t *node_to_insert) {
  node_to_insert->next = *head;
  if (*head != NULL) {
    (*head)->prev = node_to_insert;
  }
  *head = node_to_insert;
  return node_to_insert;
}

node_t *insertAfterNode(node_t *node_to_insert_after, node_t *new_node) {
  new_node->next = node_to_insert_after->next;

  if (new_node != NULL) {
    new_node->next->prev = node_to_insert_after;
  }

  new_node->prev = node_to_insert_after;
  node_to_insert_after->next = new_node;
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

void remove_node(node_t **head, node_t *node_to_remove) {
  if (*head == node_to_remove) {
    *head = node_to_remove->next;
    if (*head != NULL) {
      (*head)->prev = NULL;
    }
    return;
  } else {
    node_to_remove->prev->next = node_to_remove->next;
    if (node_to_remove != NULL) {
      node_to_remove->next->prev = node_to_remove->prev;
    }
    node_to_remove->next = NULL;
    node_to_remove->prev = NULL;
  }

  return;
}

void printList(node_t *head) {
  node_t *tmp = head;

  while (tmp != NULL) {
    printf("[ %d ]\t", tmp->value);
    tmp = tmp->next;
  }
  printf("\n");
}