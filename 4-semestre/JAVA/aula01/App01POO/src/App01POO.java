import java.util.Scanner;

public class App01POO {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Pessoa maria = new Pessoa();
        System.out.print("Digite sua idade: ");
        maria.idade = scanner.nextInt();
        maria.correr();
        maria.dormir();
    }

}
