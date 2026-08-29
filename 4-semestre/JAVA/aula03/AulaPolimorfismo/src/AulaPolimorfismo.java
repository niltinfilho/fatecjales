import java.util.Scanner;

public class AulaPolimorfismo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Professor professor = new Professor();
        System.out.print("Informe o nome do professor: ");
        professor.nome = scanner.nextLine();

        System.out.print("Informe a carga horária do professor: ");
        professor.cargaHoraria = scanner.nextInt();

        System.out.print("Informe o valor da hora trabalhada: ");
        professor.valorHora = scanner.nextFloat();

        professor.calcularSalario();

        Medico medico = new Medico();
        System.out.print("Informe o nome do medico: ");
        medico.nome = scanner.nextLine();

        System.out.print("Informe a carga horária do medico: ");
        medico.cargaHoraria = scanner.nextInt();

        System.out.print("Informe o valor da hora trabalhada: ");
        medico.valorHora = scanner.nextFloat();

        medico.calcularSalario();
    }
}