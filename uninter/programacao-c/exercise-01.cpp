#include <stdio.h>
#include <stdlib.h>

#define ROW 8
#define COL 8

// Rotina principal:
int main() {
    // Declaração de Variáveis; 
    int board[ROW][COL];

    // Declaração das Funções protótipo;
    void resetBoard(int board[][8]);
    void mainMenu(int board[][8]);

    //Invocação das funções protótipo;
    resetBoard(board);
    mainMenu(board);

    // Sai do software
    return 0;
}

// Rotina responsável por resetar o tauleiro, atribuindo espaços vazios;
void resetBoard(int board[][8]) {
    for(int row = 0; row < ROW; row++) {
        for(int col = 0; col < COL; col++) {
            board[row][col] = { 0 };
        }
    }
}

// Rotina responsável por Imprimir e controlar o Menu do sistema;
void mainMenu(int board[][8])
{

    void insertPieceMenu(int bboard[][8]);
    void printPieces(int board[][8]);
    void printBoard(int board[][8]);

    char opt;

    system("clear");
    printf("#### CHESS TABLE ####\n\n");
    printf("\t## MENU ##\n\n");
    printf("\t [I] - Insere uma peça no tabuleiro\n");
    printf("\t [P] - Imprime tabuleiro\n");
    printf("\t [Q] - Imprime quantidade de peças de cada tipo que estão disposta no tabuleiro\n");
    printf("\t [S] - Sai do Software\n");
    scanf("%c", &opt);

    switch (opt)
    {
    case 'I':
    case 'i':
        insertPieceMenu(board);
        break;
    case 'P':
    case 'p':
        printBoard(board);
        break;
    case 'Q':
    case 'q':
        printPieces(board);
        break;
    case 'S':
    case 's':
        exit(0);
    default:
        system("clear");
        printf("A tecla digitada não correponde a uma opção válida\n");
        printf("***Porfavor insira uma opção válida***\n");
        mainMenu(board);
    }
}

// Imprime tabuleiro;
void printBoard(int board[][8]) {

    // Imprime numeração das colunas;
    system("clear");

    printf("         ");
    for(int i = 1; i <= 8; i++) {
        
        printf("%d     ", i);
    }

    printf("\n         ");
    for(int i = 1; i <= 8; i++) {
        
        printf("*     ");
    }
    
    printf("\n       ");
    for(int i = 1; i <= 8; i++) {
        
        printf("______");
    }

    for (int row = 0; row < ROW; row++) {
            printf("\n");

        for (int col = 0; col < COL; col++) {
            setbuf(stdout, NULL);
            // Imprime numeração das linhas;
            if(col == 0) {
                printf("%d *   ", row + 1);
                printf("|");
            }

            // Imprime peça correspondente ao campo;
            printf("__%d__|", board[row][col]);
        }
    }

    printf("\n\n");
    system("read -p \"Pressione qualquer tecla para retornar\" saindo");
    // Retorna oa Menu principal;
    mainMenu(board);
}

// Rotina responsável por imprimir a quantidade de cada tipo de peça;
void printPieces(int board[][8])
{
    // Definição de variáveis;
    int pawn = 0, knight = 0, rook = 0, bishop = 0, king = 0, queen = 0, none = 0;
    // Variável responsável por checar qual peça está presente em determinado campo;
    int selectedPiece = 0;

    // Percorre os campos e aumenta a quantidade de cada peça de acordo com a peça contida em cada campo;
    for (int row = 0; row < ROW; row++)
    {
        for (int col = 0; col < COL; col++)
        {
            selectedPiece = board[row][col];

            switch (selectedPiece)
            {
            case 1:
                pawn++;
                break;
            case 2:
                knight++;
                break;
            case 3:
                rook++;
                break;
            case 4:
                bishop++;
                break;
            case 5:
                king++;
                break;
            case 6:
                queen++;
                break;
            default:
                none++;
                break;
            }
        }
    }
    system("clear");
    printf("O Tabuleiro possui em sua superfície as seguintes peças dispostas: \n");
    printf("[%d] - PEÃO\n", pawn);
    printf("[%d] - CAVALO\n", knight);
    printf("[%d] - TORRE\n", rook);
    printf("[%d] - BISPO\n", bishop);
    printf("[%d] - REI\n", king);
    printf("[%d] - RAINHA\n", queen);
    printf("[%d] - ESPAÇO VAZIO", none);
    printf("\n\n");
    system("read -p \"Pressione qualquer tecla para retornar\" saindo");
    // Retorna ao Menu Principal;
    mainMenu(board);
}

// Imprime Menu para inserção de peças;
void insertPieceMenu(int board[][8]) {

    // Declaração de função protótipo;
    void insertPiece(int piece, int board[][8]);

    // Variável de controle do menu;
    int opt;

    system("clear");
    printf("Digite o número que corresponde a peça que deseja inserir: \n");
    printf("\t[1] - PEÃO\n");
    printf("\t[2] - CAVALO\n");
    printf("\t[3] - TORRE\n");
    printf("\t[4] - BISPO\n");
    printf("\t[5] - REI\n");
    printf("\t[6] - RAINHA\n");
    scanf("%d", &opt);

    // Seleciona peça;
    if (opt >= 1 && opt <= 6)
    {
        system("clear");
        insertPiece(opt, board);
        printf("==> Peça selecionada com sucesso! <==");
        system("read -p \"Pressione qualquer tecla para prosseguir\" saindo");
    }
    else {
        system("clear");
        printf("==> *** Peça inválida, digite uma peça válida *** <==");
        system("read -p \"Pressione qualquer tecla para retornar ao Menu Principal.\" saindo");
        insertPieceMenu(board);
    }
}

// Rotina responsável por inserir uma peça ao tabuleiro;
void insertPiece(int piece, int board[][8]) {

    int row, col;

    system("clear");
    printf("--> Digite a LINHA do tabuleiro em que deseja inserir a peça escolhida: \n");
    scanf("%d", &row);

    if (row >= 1 && row <= 8) {

        printf("==> Linha [%d] selecionada com sucesso! <==\n", row);
        system("read -p \"Pressione qualquer tecla para prosseguir.\" carregando");
        system("clear");
        printf("--> Digite a COLUNA em que seja inserir a peça escolhida: \n"); 
        scanf("%d", &col);

        if (col >= 1 && col <= 8)
        {
            printf("==> Coluna [%d] selecionada com sucesso <==\n", col);
            board[row - 1][col - 1] = { piece };
            printf("==> Peça inserida com sucesso! <==\n\n");
            system("read -p \"Pressione qualquer tecla para retonar ao Menu Principal.\" saindo");
            mainMenu(board);
        }
        else
        {
            system("clear");
            printf("*** Você digitou uma LINHA / COLUNA inválida, porfavor digite apenas números válidos (1 a 8) ***");
            system("read -p \"Pressione qualquer tecla para retornar\" saindo");
            insertPiece(piece, board);
        }
    }
    else
    {
        system("clear");
        printf("*** Você digitou uma LINHA / COLUNA inválida, porfavor digite apenas números válidos (1 a 8) ***");
        system("read -p \"Pressione qualquer tecla para retornar\" saindo");
        insertPiece(piece, board);
    }
}