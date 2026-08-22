import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Pessoa pessoa = new Pessoa();
        System.out.print("Digite a idade da pessoa: ");
        pessoa.setIdade(scanner.nextInt());
        System.out.println("A idade informada é " + pessoa.getIdade());
    }
}