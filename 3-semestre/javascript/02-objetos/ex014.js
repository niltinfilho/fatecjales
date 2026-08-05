class Entrega {
    constructor(codigo, status) {
        this.codigo = codigo;
        this.status = status;
    };
};

class EntregaExpressa extends Entrega {
    constructor(codigo, status, prazoHoras) {
        super(codigo, status);
        this.prazoHoras = prazoHoras;
    };

    exibirResumo() {
        console.log(`Entrega: ${this.codigo} | Status: ${this.status} | Prazo: ${this.prazoHoras}`);
    };
};

let entrega = new EntregaExpressa(12, "Em andamento", 3);
entrega.exibirResumo();