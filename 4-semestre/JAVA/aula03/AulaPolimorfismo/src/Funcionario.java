public class Funcionario {

    String nome;
    int cargaHoraria;
    float valorHora;

    void calcularSalario() {
        float calculo;
        calculo = this.cargaHoraria * this.valorHora;
        System.out.println("O funcionário " + this.nome + " recebe o salário de R$" + calculo);
    }
}
