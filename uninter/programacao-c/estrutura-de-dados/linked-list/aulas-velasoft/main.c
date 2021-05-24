#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct dataNode {
  int id;
} DataNode;

typedef struct node {
  DataNode data;
  struct node* next;
} Node;

typedef struct list {
  int size;
  Node* head;
} List;

List* createList();
void push(List* list, DataNode data);
void printList(List* list);
void pop(List* list);
bool isEmpty(List* list);
Node* atPos(List* list, int index);
int indexOf(List* list, Node* node);
void removeAt(List* list, int index);
void insertAt(List* list,DataNode data, int index);
void swapItems(List* list, Node* itemA, Node* itemB);
Node* min(List* list, int starter_seek_index);
Node* max(List* list, int starter_seek_index);
void ascSort(List* list);
void descSort(List* list);

int main(void) {
  
  List* list = createList();
  DataNode data;

  data.id = 5;
  push(list, data);

  data.id = 9;
  push(list, data);

  data.id = 3;
  push(list, data);

  data.id = 1;
  push(list, data);

  data.id = 7;
  push(list, data);
  printList(list);

  swapItems(list, atPos(list, 0), atPos(list,4));

  descSort(list);
  printList(list);

  getchar();
  return 0;
}

List* createList() {
  List* list = (List*)malloc(sizeof(List));

  list-> size = 0;
  list->head = NULL;

  return list;
}

void push(List* list, DataNode data) {
  Node* node = (Node*)malloc(sizeof(Node));
  node->data = data;
  node->next = list->head;
  list->head = node;
  list->size++;
}

void printList(List* list) {

  if(isEmpty(list)) {
    printf("Lista vazia\n");
    return;
  }

  Node* temp = list->head;

  while(temp != NULL) {
    printf("\tID: [ %d ]\n", temp->data.id);
    temp = temp->next;
  }
  printf("\n\n");
}

bool isEmpty(List* list) {
  return (list->size == 0);
}

void pop(List* list) {

  if(!isEmpty(list)) {
    Node* temp = list->head;

    list->head = temp->next;
    free(temp);
    list->size--;
  }
}

Node* atPos(List* list, int index) {

  if(index >= 0 && index < list->size) {
    Node* temp = list->head;

    for(int i = 0; i < index; i++) {
      temp = temp->next;
    }

    return temp;
  }

  return NULL;
}

int indexOf(List* list, Node* node) {
  if(node != NULL) {
    Node* temp = list->head;

    int index = 0;

    while(temp != node && temp != NULL) {
      temp = temp->next;
      index++;
    }

    if(temp != NULL) {
      return index;
    }

  }

  return -1;
}

void removeAt(List* list, int index) {
  
  if(index == 0) {
    pop(list);
  } else {
    Node* releaseNode = atPos(list, index);

    if( releaseNode != NULL) {

      Node* previousNode = atPos(list, index -1);
      previousNode->next = releaseNode->next;

      free(releaseNode);
      list->size--;
    }
  }

}

void insertAt(List* list, DataNode data, int index) {

  if(index == 0) {
    push(list, data);
  } else {
    Node* current = atPos(list, index);

    if(current != NULL) {
      Node* previous = atPos(list, index -1);
      Node* newNode = (Node*)malloc(sizeof(Node));
      newNode->data = data;

      previous->next = newNode;
      newNode->next = current;
      list->size++;
    }
  }
}

void swapItems(List* list, Node* itemA, Node* itemB) {

  if(itemA == itemB) 
    return;

  int indexA = indexOf(list, itemA);
  int indexB = indexOf(list, itemB);

  if(indexA == -1 || indexB == -1)
    return;

  if(indexA > indexB) {
    itemA = itemB;
    itemB = atPos(list, indexA);


    indexA = indexB;
    indexB = indexOf(list, itemB);
  }



  Node* itemB_prev = atPos(list,indexB - 1);

  if(itemA == list->head) {
    list->head = itemB;

  } else {
    Node* itemA_prev = atPos(list, indexA - 1);
    itemA_prev->next = itemB;
  }

  itemB_prev->next = itemA;

  Node* itemA_next = itemA->next;
  itemA->next = itemB->next;
  itemB->next = itemA_next;
}

Node* min(List* list, int starter_seek_index) {
  Node* temp = atPos(list, starter_seek_index);

  if(temp != NULL) {
    Node* smallestItem = temp;

    while(temp != NULL) {
      if(temp->data.id < smallestItem->data.id) {
        smallestItem = temp;
      }

      temp = temp->next;
    }

    return smallestItem;
  }

  return NULL;

}

Node* max(List* list, int starter_seek_index) {
  Node* temp = atPos(list, starter_seek_index);

  if(temp != NULL) {
    Node* smallestItem = temp;

    while(temp != NULL) {
      if(temp->data.id > smallestItem->data.id) {
        smallestItem = temp;
      }

      temp = temp->next;
    }

    return smallestItem;
  }

  return NULL;

}

void ascSort(List* list) {

  for (int i = 0; i < list->size - 1; i++) {
    swapItems(list, atPos(list, i), min(list, i));
  }

}

void descSort(List* list) {

  for (int i = 0; i < list->size -1; i++) {
    swapItems(list, atPos(list, i), max(list, i));
  }

}
