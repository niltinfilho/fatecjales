public class Meio extends Ingresso {

    @Override
    void calculaDesconto() {
        float valorFinal = valor - (valor * 0.10f);
        float valorComDesconto = valorFinal - (valorFinal * 0.50f);
        System.out.println("O valor do ingresso MEIO com desconto é R$" + valorComDesconto);
    }
}
