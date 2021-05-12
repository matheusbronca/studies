#include <stdio.h>

struct list {
    int value;
    struct list *nextElement;
};

struct list *searchValue(struct list *pointer_list, int value){

    while(pointer_list != (struct list*) 0) {
        if(pointer_list->value == value) {
            return(pointer_list);
        } else {
            pointer_list = pointer_list->nextElement;
        };
    };

    return (struct list *) 0;
};

int main(void) {

    struct list *searchValue(struct list *pointer_list, int value);
    struct list m1, m2, m3;
    struct list *result, *hook = &m1;
    int value;

    m1.value = 5;
    m2.value = 10;
    m3.value = 15;

    m1.nextElement = &m2;
    m2.nextElement = &m3;
    m3.nextElement = (struct list *) 0;

    printf("Digite o valor da pesquisa: ");
    scanf("%i", &value);

    result = searchValue(hook, value);

    if(result == (struct list *)0) {
        printf("Valor não encontrado!");
    } else {
        printf("Valor %i encontrado! \n", result->value);
    }

    getchar();
    return 0;
};