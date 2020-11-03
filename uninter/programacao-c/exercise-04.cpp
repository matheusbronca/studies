// Exercício 4:
// Faça um programa, em linguagem C, para calcular a área e o perímetro de
// um hexágono. O programa deve implementar uma função chamada calc_hexa que
// calcula a área e o perímetro de um hexágono regular de lado L. O programa deve
// solicitar ao usuário o lado do polígono, calcular e imprimir a área e o perímetro do
// polígono. O programa termina quando for digitado um valor negativo qualquer para o
// lado. A função deve obedecer ao seguinte protótipo:

#include <stdlib.h>
#include <stdio.h>
#include <math.h>

int main() {
    // Variáveis;
    float L;
    float area;
    float perimetro;

    // Protótipo de função;
    void calc_hexa(float L, float *area, float *perimetro);

    // Invocação da função calc_hexa, passando a referencia para o endereços de perimetro e area;
    calc_hexa(L, &area, &perimetro);

    return 0;
}

// Declaração da função calc_hexa
void calc_hexa(float L, float *area, float *perimetro) {
        // Limpa buffers de entrada e saída, prevenindo de comportamentos inesperados;
        setbuf(stdout, NULL);
        setbuf(stdin, NULL);

        // Limpa tela
        system("clear");
        // Imprime instruções para o usuário
        printf("Insira o lado do Hexagono para calcular seu perímetro e área: \n(Insira um número negativo para sair do programa)\n");
        // Escaneia e armazena o dado informado pelo usuário na referencia de L;
        scanf("%f", &L);

        // Condicional para prosseguir ou sair do Software;
        if (L >= 0) {
            // Calcula o perímetro do Hexágono;
            *perimetro = (6 * L);
            // Calcula a área do Hexágono;
            *area = (3 * pow(L, 2) * sqrt(3)) / 2;

            // Imprime os dados calculados;
            printf("Área: %f\n", *area);
            printf("Perímetro: %f\n", *perimetro);

            // Requer uma operação do usuário para reiniciar a operação;
            system("read -p \"Pressione ENTER para calcular novamente.\" prosseguir");
            calc_hexa(L, area, perimetro);
        }
        else {
            // Sai do software
            exit(0);
        }
}
