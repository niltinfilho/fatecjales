class CanalVideo {
    constructor (nome, inscritos) {
        this.nome = nome;
        this.inscritos = inscritos;
    };

    mostrarCanal() {
        console.log(`O canal ${this.nome} possui ${this.inscritos} inscritos`);
    };
};

let canalNiltin = new CanalVideo("niltinf", 98);
canalNiltin.mostrarCanal();