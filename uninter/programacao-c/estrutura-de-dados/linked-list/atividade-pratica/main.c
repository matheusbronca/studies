#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

// Definição de todos as estruturas / tipos
// necessários para execução do programa;
typedef struct duration {
  int minutes;
  int seconds;
} Duration;

typedef struct music {
  const char *name;
  const char *author;
  const char *album;
  Duration *duration;

} Music;

typedef struct node {
  Music *music;
  struct node *next;
} Node;

typedef struct playlist {
  int size;
  Node *head;
} Playlist;

// Cabeçalhos Funções
Playlist *createPlaylist();
Music *createMusic(const char *name,const char *album,const char *author, int duration_minutes,
                   int duration_seconds);
void push(Playlist *playlist, Music *music);
void printMusic(Music *music);
void printPlaylist(Playlist *playlist);
void populatePlaylist(Playlist *playlist);
void clearBuffer();
void addMusicToPlaylist(Playlist *playlist);
void displayMenu(Playlist *playlist);
bool isEmpty(Playlist* playlist) {
  return (playlist->size == 0);
}


// Função principal
int main(void) {

  // Cria uma nova playlist
  Playlist *playlist = createPlaylist();

  // Verifica se a playlist está vazia e popula a playlist
  // com músicas.
  if(isEmpty(playlist)) {
    populatePlaylist(playlist);
  }

  // Mostra o Menu na tela
  displayMenu(playlist);

  // Impede que a função main finalize (portabilidade entre SO's)
  getchar();
  return 0;
}

// Função responsável por criar Playlists;
Playlist *createPlaylist() {
  // Aloca memória do tamanho da estrtura Playlist;
  Playlist *playlist = (Playlist *)malloc(sizeof(Playlist));

  // Inicializa o tamanho e a cabeça da lista encadeada (Playlist);
  playlist->size = 0;
  playlist->head = NULL;
  
  // Retorna a Playlist;
  return playlist;
}

// Função responsável por criar uma Música;
Music *createMusic(const char *name,const char *album,const char *author, int duration_minutes,
                   int duration_seconds) {

  // Aloca espaço na memória para uma estrutura do tipo duração (Duration);
  Duration *duration = (Duration *)malloc(sizeof(Duration));

  // Seta as variáveis minutos e segundos da estrutura Duration;
  duration->minutes = duration_minutes;
  duration->seconds = duration_seconds;

  // Aloca espaço na memória suficiente para uma estrutura do tipo Music;
  Music *music = (Music *)malloc(sizeof(Music));

  // Seta as variáveis do ponteiro tipo Music;
  music->album = album;
  music->name = name;
  music->author = author;
  music->duration = duration;

  // Retorna ponteiro tipo Muisc;
  return music;
}

// Insere uma nova Música na Playlist passada como parâmetro;
void push(Playlist *playlist, Music *music) {
  Node *node = (Node *)malloc(sizeof(Node));

  node->music = music;
  node->next = playlist->head;
  playlist->head = node;
  playlist->size++;
}

// Imprime a playlist;
void printPlaylist(Playlist *playlist) {
  system("clear");

  // Nó para varreadura
  Node *scanNode = playlist->head;

  if(scanNode != NULL) {
    while (scanNode != NULL) {
      Music *music = (Music *)malloc(sizeof(Music));
      music = scanNode->music;
      printMusic(music);
      scanNode = scanNode->next;
    }
  } else {
    printf("Não existem músicas disponíveis nessa Playlist.\n");
  }

  printf("Digite qualquer tecla para retornar ao menu principal...\n");
  getchar();
  displayMenu(playlist);
}

// Imprime Música;
void printMusic(Music *music) {
  printf("======================================\n");
  printf("===> [%s] <===\n", music->name);
  printf("======================================\n");
  printf("Duration: %2d:%2d\n", music->duration->minutes,
         music->duration->seconds);
  printf("Album: %s\n", music->album);
  printf("Artista: %s\n", music->author);
  printf("______________________________________\n");
  printf("\n\n");
}

// Popula a Playlist;
void populatePlaylist(Playlist *playlist) {
  push(playlist,
       createMusic("Quem manda é a 30","Máquina do Tempo","Matuê", 4, 17));
  push(playlist,
       createMusic("M4","Máquina do Tempo","Matuê", 2, 50));
  push(playlist,
       createMusic("Banco","Máquina do Tempo","Matuê, Predella", 4, 14));
  push(playlist,
       createMusic("Bless You","Gimme some truth (Deluxe)","John Lennon", 4, 37));
  push(playlist,
       createMusic("Love","Gimme some truth","John Lennon", 3, 20));
  push(playlist,
       createMusic("Jealous Guy - Ultimate Mix","Gimme some truth","Matuê", 4, 10));
  push(playlist,
       createMusic("Bennie And The Jets","Goodbye Yellow Brick Road","Elton John", 5, 22));
}

// Limpa Buffer;
void clearBuffer() {
  char c;
  while ((c = getchar() != '\n' && c != EOF)) {
  }
}

// Mostra o Menu da aplicação;
void displayMenu(Playlist* playlist) {

  int opt;

  system("clear");
  printf("=== [ MENU ] ===\n");
  printf("[1] => Mostrar todas as faixas disponíveis nesta Playlist\n");
  printf("[2] => Adicionar uma nova faixa nesta Playlist\n");
  printf("[3] => Sair do programa\n");
  printf("\n");
  scanf("%d", &opt);
  clearBuffer();

  switch(opt) {
    case 1:
      printPlaylist(playlist);
      break;

    case 2:
      addMusicToPlaylist(playlist);
      break;
    case 3:
      exit(0);
      break;
     default:
      system("clear");
      printf("Opção inválida, porfavor digite uma opção válida.");
     break;
  }

}

// Adiciona uma Música a uma Playlist;
void addMusicToPlaylist(Playlist *playlist) {
  char name[50];
  char album[50];
  char author[50];
  int duration_minutes;
  int duration_seconds;

  system("clear");
  printf("=== [ ADICIONAR NOVA FAIXA ] ===\n");
  printf("Digite o nome da faixa: \n");
  
  scanf("%49[^\n]", name);
  printf("\n");
  clearBuffer();

  printf("Digite a duração da faixa: [mm:ss] \n");
  scanf("%d:%d", &duration_minutes, &duration_seconds);
  printf("\n");
  clearBuffer();

  printf("Digite o albúm da faixa: \n");
  scanf("%50[^\n]", album);
  printf("\n");
  clearBuffer();

  printf("Digite o nome do autor/banda: \n");
  scanf("%[^\n]", author);
  printf("\n");

  clearBuffer();

  push(playlist, createMusic(name, album, author, duration_minutes, duration_seconds));

  printf(" ===> FAIXA ADICIONADA COM SUCESSO <===\n");
  printf("Digite qualquer tecla para retornar ao Menu principal...\n");
  displayMenu(playlist);
}