class SalaVirtual {
    constructor(nome, capacidade) {
        this.nome = nome;
        this.capacidade = capacidade;
    };

    mostrarResumo() {
        console.log(`A sala "${this.nome}" tem capacidade para ${this.capacidade} pessoas`);
    };
};

let sala = new SalaVirtual("Reunião Fatec as 16h", 8);
sala.mostrarResumo();