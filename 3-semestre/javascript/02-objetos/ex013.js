class Plano {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    };
};

class PlanoPremium extends Plano {
    mostrarBeneficios() {
        console.log("Vídeos exclusívos");
    };
};