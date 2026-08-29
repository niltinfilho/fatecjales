public class Ingresso {

    int numero;
    float valor;

    void calculaDesconto() {
        float valorFinal = valor - (valor * 0.10f);
        System.out.println("O valor do ingresso com desconto é R$" + valorFinal);
    }
}
