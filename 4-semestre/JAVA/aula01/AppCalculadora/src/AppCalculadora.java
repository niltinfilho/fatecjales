import java.util.Scanner;

public class AppCalculadora {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        Calculadora calculadora = new Calculadora();

        System.out.print("Digite o primeiro valor: ");
        calculadora.number1 = scan.nextDouble();

        System.out.print("Digite o segundo valor: ");
        calculadora.number2 = scan.nextDouble();

        System.out.println("O resultado da soma foi: " + calculadora.somar());
        System.out.println("O resultado da subtração foi: " + calculadora.subtrair());
        System.out.println("O resultado da multiplicação foi: " + calculadora.multiplicar());
        System.out.println("O resultado da divisão foi: " + calculadora.dividir());
    }
}
