#include <stdio.h>
#include <stdlib.h>

typedef struct node {
  int data;
  struct node *left, *right;
} Node;

typedef struct {
  Node *root;
} BinaryTree;

void insertLeft(Node *node, int data);
void insertRight(Node *node, int data);
void insert(BinaryTree *tree, int data);
Node *insertNew(Node *root, int value);
void print(Node *root);
int size(Node *root);
int search(Node *root, int sought_value);
Node *remove(Node *root, int value_to_be_removed);

void clearBuffer();

int main() {

  int opt, value;

  BinaryTree tree;
  tree.root = NULL;

  Node *root = NULL;

  do {
    system("clear");
    printf("=== [ Árvore Binária ] ===\n\n");
    printf("[1] -> Imprimir\n");
    printf("[2] -> Inserir\n");
    printf("[3] -> Buscar\n");
    printf("[4] -> Remover\n");
    printf("[0] -> Sair\n");
    scanf("%d", &opt);
    clearBuffer();

    switch (opt) {
    case 0:
      system("clear");
      printf("\nSaindo...\n");
      break;
    case 1:
      system("clear");
      printf("\n === [ IMPRESSAO ÁRVORE BINÁRIA ] === \n\n");
      printf("[ VALORES ]:\n");
      print(root);
      printf("\n\n[ TAMANHO ]: %d\n", size(root));
      clearBuffer();
      break;
    case 2:
      system("clear");
      printf("\n === [ INSERÇÃO NÓ - ÁRVORE BINÁRIA ] === \n");
      printf("Digite um valor: ");
      scanf("%d", &value);
      clearBuffer();
      // insert(&tree, value);
      root = insertNew(root, value);
      // tree.root = insertNew(tree.root, value);
      break;
    case 3:
      system("clear");
      printf("\n === [ BUSCA NÓ - ÁRVORE BINÁRIA ] === \n\n");
      printf("Digite o valor que deseja buscar: ");
      scanf("%d", &value);
      clearBuffer();
      printf("\nResultado da busca: %d\n", search(root, value));
      clearBuffer();
      break;
    case 4:
      system("clear");
      printf("\n === [ REMOÇÃO NÓ - ÁRVORE BINÁRIA ] === \n\n");
      printf("Digite o valor que deseja remover: ");
      scanf("%d", &value);
      clearBuffer();
      root = remove(root, value);
      clearBuffer();
    default:
      system("clear");
      printf("Opção inválida!");
      break;
    }
  } while (opt != 0);

  getchar();
  return 0;
}

void insertLeft(Node *node, int data) {
  if (node->left == NULL) {
    Node *new_node = (Node *)malloc(sizeof(Node));
    new_node->data = data;
    new_node->left = NULL;
    new_node->right = NULL;

    node->left = new_node;
  } else {
    if (data < node->left->data) {
      insertLeft(node->left, data);
    }
    if (data > node->left->data) {
      insertRight(node->left, data);
    }
  }
}

void insertRight(Node *node, int data) {
  if (node->right == NULL) {
    Node *new_node = (Node *)malloc(sizeof(Node));
    new_node->data = data;
    new_node->left = NULL;
    new_node->right = NULL;

    node->right = new_node;
  } else {
    if (data > node->right->data) {
      insertRight(node->right, data);
    }
    if (data < node->right->data) {
      insertLeft(node->right, data);
    }
  }
}

void insert(BinaryTree *tree, int data) {
  if (tree->root == NULL) {
    Node *new_node = (Node *)malloc(sizeof(Node));
    new_node->data = data;
    new_node->left = NULL;
    new_node->right = NULL;
    tree->root = new_node;
  } else {
    if (data < tree->root->data) {
      insertLeft(tree->root, data);
    }
    if (data > tree->root->data) {
      insertRight(tree->root, data);
    }
  }
}

Node *insertNew(Node *root, int value) {
  if (root == NULL) {
    Node *new_node = (Node *)malloc(sizeof(Node *));
    new_node->data = value;
    new_node->left = NULL;
    new_node->right = NULL;
    return new_node;
  } else {
    if (value < root->data) {
      root->left = insertNew(root->left, value);
    }
    if (value > root->data) {
      root->right = insertNew(root->right, value);
    }
    return root;
  }
}

void print(Node *root) {
  if (root != NULL) {
    print(root->left);
    printf("%d - ", root->data);
    print(root->right);
  }
}

int size(Node *root) {
  if (root == NULL) {
    return 0;
  } else {
    return 1 + size(root->left) + size(root->right);
  }
}

int search(Node *root, int sought_value) {
  if (root == NULL) {
    return -1;
  } else {
    if (root->data == sought_value) {
      return root->data;
    } else {
      if (sought_value < root->data) {
        return search(root->left, sought_value);
      } else {
        return search(root->right, sought_value);
      }
    }
  }
}

Node *remove(Node *root, int value_to_be_removed) {
  if (root == NULL) {
    printf("Valor não encontrado. \n");
    return NULL;
  } else {
    if (root->data == value_to_be_removed) {
      // Remove se nó não possui nenhum filho (NÓS TIPO FOLHA):
      if (root->left == NULL && root->right == NULL) {
        free(root);
        return NULL;
      } else {
        if (root->left == NULL || root->right == NULL) {
          // Remove se o nó possui somente UM filho (NÓS COM SOMENTE 1 FILHO):
          Node *node_child = (Node *)malloc(sizeof(Node));

          if (root->left != NULL)
            node_child = root->left;
          else
            node_child = root->right;

          free(root);
          return (node_child);
        } else {
          // Remove se o nó possui DOIS filhos (NÓS COM 2 FILHOS)
          Node *node_left = root->left;

          while (node_left->right != NULL)
            node_left = node_left->right;

          root->data = node_left->data;
          node_left->data = value_to_be_removed;

          root->left = remove(root->left, value_to_be_removed);
          return root;
        }
      }
    } else {
      if (value_to_be_removed < root->data) {
        root->left = remove(root->left, value_to_be_removed);
      } else {
        root->right = remove(root->right, value_to_be_removed);
      }
      return root;
    }
  }
}

void clearBuffer() {
  char c;
  while ((c = getchar() != '\n' && c != EOF)) {
  }
}
