#include <stdio.h>
#include <stdlib.h>

typedef struct {
    char name[50];
    int day, month, year;
} Contact;

void clearConsole(void);
void printContacts(Contact **contact, int filledSize);
int registerContact(Contact **contact, int filledSize, int totalSize);
void editContact(Contact **contact, int totalSize);
 
int main(void) {
    
    Contact *agenda[50];
    int opt, size = 0, totalSize = 50;

    do{
        clearConsole();
        printf("\n\t*** MENU **\n");
        printf("\t----------------------------------------------\n");
        printf("\n\t[ 1 ] => Cadastrar um novo contato");
        printf("\n\t[ 2 ] => Editar contato");
        printf("\n\t[ 3 ] => Ver lista de contatos");
        printf("\n\t[ 4 ] => Salvar");
        printf("\n\t[ 5 ] => Ler arquivo de Agenda");
        printf("\n\t[ 0 ] => Sair\n");
        printf("\t----------------------------------------------\n");
        scanf("%d", &opt);
        getchar();

        switch(opt) {
            case 1:
                size += registerContact(agenda, size, totalSize);
                break;
            case 2:
                editContact(agenda, size);
                break;
            case 3:
                printContacts(agenda, size);
                break;
            case 4:
                break;
            case 5:
                break;
            default:
                if(opt != 0)
                    printf("Opção inválida, digite uma opção válida.\n");
                break;
        }

    } while(opt != 0); 
    
    getchar();
    return 0;

}

void clearConsole(void) {
    printf("\e[1;1H\e[2J");
}

void printContacts(Contact **contact, int filledSize) {
    int i;

clearConsole();
    printf("\n\t\tLista de Contatos:\n");
    printf("\t----------------------------------------------\n");
    for (i = 0; i < filledSize; i++) {

        printf("\t%d = %2d/%2d/%4d\t%s\n", 
            i+1,contact[i]->day, contact[i]->month, contact[i]->year,
            contact[i]->name);
    }
        printf("\t----------------------------------------------\n");

    printf("\n\n Digite qualquer tecla para voltar ao menu principal.");
    getchar();
}

int registerContact(Contact **contact, int filledSize, int totalSize) {

    clearConsole();

    if(filledSize < totalSize) {
        Contact *new_contact = (Contact *) malloc(sizeof(Contact));
        printf("\nDigite o nome do contato: ");
        scanf("%50[^\n]", new_contact->name);
        printf("\nDigite a data de aniversário (dd mm aaaa): ");
        scanf("%d%d%d", &new_contact->day, &new_contact->month, &new_contact->year);
        getchar();

        contact[filledSize] = new_contact;

        return 1;

    } else {
        printf("\n\n\tImpossível cadastrar novo usuário. Capacidade máxima da agenda atingida. \n");
        return 0;
    }
}

void editContact(Contact **contact, int totalSize) {
    int index;

    clearConsole();
    printContacts(contact, totalSize);

    printf("\n\tDigite o código do contato que deseja alterar: \n");
    scanf("%d", &index);
    getchar();
    index--;

    if(index >= 0 && index < totalSize) {
        Contact *new_contact = (Contact *) malloc(sizeof(Contact));
        printf("\nDigite o nome do Contato: ");
        scanf("%50[^\n]", new_contact->name);
        printf("\nDigite a data de aniversário: (dd mm aaaa): ");
        scanf("%d%d%d", &new_contact->day, &new_contact->month, &new_contact->year);
        getchar();
        contact[index] = new_contact;
    }else {
        printf("\n\tCódigo inválido!\n");
    }
}