import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Inteiro inteiro = new Inteiro();
        System.out.print("Digite o número do ingresso inteiro: ");
        inteiro.numero = scanner.nextInt();
        System.out.print("Digite o valor do ingresso inteiro: ");
        inteiro.valor = scanner.nextFloat();
        inteiro.calculaDesconto();

        Meio meio = new Meio();
        System.out.print("Digite o número do ingresso meio: ");
        meio.numero = scanner.nextInt();
        System.out.print("Digite o valor do ingresso meio: ");
        meio.valor = scanner.nextFloat();
        meio.calculaDesconto();
    }
}