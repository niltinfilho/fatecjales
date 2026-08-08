public class Pessoa {
    int idade;
    String nome;
    float altura;

    void correr() {
        System.out.println("Correndo... mesmo com " + this.idade + " anos de idade!");
    }

    void dormir() {
        System.out.println("Dormindo...");
    }
}
