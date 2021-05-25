#include <stdio.h>
#include <stdlib.h>

// Definição das estruturas / tipos

// Estrutura Aluno
typedef struct {
  int ru;
  const char *name;
  const char *email;

} Student;

// Estrutura de um "Nó" da Árvore
typedef struct node {
  Student *student_data;
  struct node *left, *right;
} Node;

// Estrutura da Árvore Binária
typedef struct {
  Node *root;
  int size;
} BinaryTree;

// Cabeçalho das Funções necessárias para execução do programa;
void clearBuffer();
BinaryTree *createBinaryTree();
void registerStudent(BinaryTree *source_tree, const char *name,
                     const char *email, int ru);
void insertLeft(Node *node, Student *to_insert, int *tree_size);
void insertRight(Node *node, Student *to_insert, int *tree_size);
void insertNode(BinaryTree *source_tree, Student *to_insert);
void populateTree(BinaryTree *tree);
void printNode(Node *root);
void print(BinaryTree *tree);
Student *search(Node *root, int ru);
void printStudent(Student *to_be_printed);

// Função principal
int main(void) {

  // Variáveis de auxiliares para entradas do usuário;
  int opt, ru;
  char name[30];
  char email[25];

  // Criação de um ponteiro do tipo Árvore Binária;
  BinaryTree *tree = createBinaryTree();
  // Popula a árvore com dados pré-inseridos
  populateTree(tree);

  // Menu da aplicação
  do {
    system("clear");
    printf("===> |[ ÁRVORE BINÁRIA - Alunos UNINTER ]| <===\n\n");
    printf("[1] -> Imprimir Alunos\n");
    printf("[2] -> Inserir um novo Aluno\n");
    printf("[3] -> Buscar Aluno\n");
    printf("[0] -> Sair\n");
    scanf(" %d", &opt);
    clearBuffer();

    switch (opt) {
    case 1:
      system("clear");
      printf("===> |[ IMPRESSÃO ALUNOS - ÁRVORE BINÁRIA ]| |[ %d  REGISTROS ]| "
             " <=== \n\n",
             tree->size);
      print(tree);
      getchar();
      break;
    case 2:
      system("clear");
      printf("===> |[ INSERÇÃO ALUNO - ÁRVORE BINÁRIA ]| <=== \n");
      printf("Insira o número do Registro Único do Aluno (RU): ");
      scanf(" %d", &ru);
      clearBuffer();

      printf("Insira o nome do Aluno: ");
      scanf("%29[^\n]", name);
      clearBuffer();

      printf("Insira o e-mail do Aluno: ");
      scanf("%24[^\n]", email);
      clearBuffer();

      registerStudent(tree, name, email, ru);
      printf("===> [ Aluno inserido com SUCESSO ]");
      clearBuffer();
      break;

    case 3:
      system("clear");
      printf("=== [ Buscar Aluno - ÁRVORE BINÁRIA ] === \n\n");
      printf("Digite o número de Registro Único (RU) do aluno que deseja "
             "buscar na árvore binária: ");
      scanf(" %d", &ru);
      clearBuffer();
      printStudent(search(tree->root, ru));

    case '\n':
      break;

    default:
      system("clear");
      printf("Opção inválida!");
      clearBuffer();
      break;
    }

  } while (opt != 0);

  getchar();
  return 0;
}

// Função que cria e devolve um ponteiro do tipo Árvore Binária;
BinaryTree *createBinaryTree() {
  // Aloca e inicializa o ponteiro;
  BinaryTree *tree = (BinaryTree *)malloc(sizeof(BinaryTree));
  tree->root = NULL;
  return tree;
}

// Função para registro e inserção de um novo aluno na Árvore Binária;
void registerStudent(BinaryTree *source_tree, const char *name,
                     const char *email, int ru) {
  Student *new_student = (Student *)malloc(sizeof(Student));
  new_student->name = name;
  new_student->email = email;
  new_student->ru = ru;

  insertNode(source_tree, new_student);
}

// Função responsável por inserir um aluno no nó a DIREITA do nó
// disponibilizado como parâmetro;
void insertRight(Node *node, Student *to_insert, int *tree_size) {
  if (node->right == NULL) {
    Node *new_node = (Node *)malloc(sizeof(Node));
    new_node->student_data = to_insert;
    new_node->left = NULL;
    new_node->right = NULL;

    node->right = new_node;
    // atualiza o tamanho (número de registros) na Árvore
    (*tree_size)++;
  } else {
    if (to_insert->ru < node->right->student_data->ru) {
      insertLeft(node->right, to_insert, tree_size);
    }
    if (to_insert->ru > node->right->student_data->ru) {
      insertRight(node->right, to_insert, tree_size);
    }
  }
}

// Função responsável por inserir um aluno no nó a ESQUERDA do nó
// disponibilizado como parâmetro;
void insertLeft(Node *node, Student *to_insert, int *tree_size) {
  if (node->left == NULL) {
    Node *new_node = (Node *)malloc(sizeof(Node));
    new_node->student_data = to_insert;
    new_node->left = NULL;
    new_node->right = NULL;

    node->left = new_node;
    // atualiza o tamanho (número de registros) na Árvore
    (*tree_size)++;
  } else {
    if (to_insert->ru < node->left->student_data->ru) {
      insertLeft(node->left, to_insert, tree_size);
    }
    if (to_insert->ru > node->left->student_data->ru) {
      insertRight(node->left, to_insert, tree_size);
    }
  }
}

// Função para inserção do nó RAIZ na Árvore;
void insertNode(BinaryTree *source_tree, Student *to_insert) {
  if (source_tree->root == NULL) {

    Node *new_node = (Node *)malloc(sizeof(Node));
    new_node->student_data = to_insert;
    new_node->left = NULL;
    new_node->right = NULL;

    source_tree->root = new_node;
    source_tree->size = 1;
  } else {

    // Ponteiro auxiliar que aponta para o tamanho da Árvore
    int *tree_size = &source_tree->size;

    // Caso o nó Raiz não seja nulo invoca recursivamente as funções
    // para inserção de nó a Esquerda / Direita
    if (to_insert->ru < source_tree->root->student_data->ru) {
      insertLeft(source_tree->root, to_insert, tree_size);
    }
    if (to_insert->ru > source_tree->root->student_data->ru) {
      insertRight(source_tree->root, to_insert, tree_size);
    }
  }
}

// Imprime um Nó específico, passado como parâmetro;
void printNode(Node *root) {
  if (root != NULL) {
    printNode(root->left);
    printf("RU: [ %d ]\n", root->student_data->ru);
    printNode(root->right);
  }
}

// Imprime todos os nós registrados na Árvore binária;
void print(BinaryTree *tree) { printNode(tree->root); }

// Popula a Árvore com Alunos;
void populateTree(BinaryTree *tree) {
  registerStudent(tree, "Monice Cristina da Silva", "monicecristina@gmail.com",
                  2784001);
  registerStudent(tree, "Rodrigo Lima", "rodrigo.lima@gmail.com", 2714459);
  registerStudent(tree, "Mariana Arantes", "mariana@gmail.com", 2164118);
  registerStudent(tree, "Matheus Bronca", "matheus.bronca@gmail.com", 2784026);
  registerStudent(tree, "Marina Arantes", "nina@gmail.com", 2784555);
  registerStudent(tree, "Ana Maria Bronca", "anabronca@gmail.com", 2792168);
  registerStudent(tree, "Túlio Canhadas", "tuliow@gmail.com", 2692179);
  registerStudent(tree, "João Miguel", "joaomiguel@gmail.com", 2699123);
  registerStudent(tree, "Gustavo Coelho", "guga.coelho@gmail.com", 2814004);
  registerStudent(tree, "Helena Cunha", "helena@gmail.com", 2822566);
}

// Busca e devolve um Aluno através do RU passado como parâmetro;
Student *search(Node *root, int ru_value) {
  if (root == NULL) {
    return NULL;
  } else {
    if (root->student_data->ru == ru_value) {
      return root->student_data;
    } else {
      if (ru_value < root->student_data->ru) {
        return search(root->left, ru_value);
      } else {
        return search(root->right, ru_value);
      }
    }
  }
}

// Imprime dados de um Aluno;
void printStudent(Student *to_be_printed) {

  if (to_be_printed != NULL) {
    system("clear");
    printf("===> |[ IMPRESSÃO ALUNO ]| <====\n\n");
    printf("[ RU ]: %d\n", to_be_printed->ru);
    printf("[ Nome ]: %s\n", to_be_printed->name);
    printf("[ E-Mail ]: %s\n", to_be_printed->email);
    printf("_______________________________________");
    printf("\n");
    printf("Digite qualquer tecla para retornar...");
    clearBuffer();
  } else {
    system("clear");
    printf("*** |[ REGISTRO NÃO ENCONTRADO NA ÁRVORE BINÁRIA ]| ***");
    clearBuffer();
  }
}

// Limpa o Buffer;
void clearBuffer() {
  char c;
  while ((c = getchar() != '\n' && c != EOF)) {
  }
}
