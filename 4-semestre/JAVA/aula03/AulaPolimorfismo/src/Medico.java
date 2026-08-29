public class Medico extends Funcionario {

    @Override
    void calcularSalario() {
        float calculo, valorAumento, salarioTotal;
        calculo = this.cargaHoraria * this.valorHora;
        valorAumento = calculo * 0.20f;
        salarioTotal = calculo + valorAumento;
        System.out.println("O funcionário " + this.nome + " recebe o salário de R$" + salarioTotal);
    }
}
