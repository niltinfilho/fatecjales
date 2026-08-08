import java.util.Scanner;

public class AppCalculadora {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        Calculadora calculadora = new Calculadora();

        System.out.print("Digite o primeiro valor: ");
        calculadora.number1 =  scan.nextInt();

        System.out.print("Digite o segundo valor: ");
        calculadora.number2 =  scan.nextInt();

        System.out.println("O resultado foi: " + calculadora.somar());
    }
}
