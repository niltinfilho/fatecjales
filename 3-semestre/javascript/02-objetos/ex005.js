class CanalVideo {
    constructor (nome, inscritos) {
        this.nome = nome;
        this.inscritos = inscritos;
    };

    mostrarCanal() {
        console.log(`O canal ${this.nome} possui ${this.inscritos} inscritos`);
    };
};

let canalYt = new CanalVideo("nilto", 98);
canalYt.mostrarCanal();


let canalTwitch = new CanalVideo("niltinf", 162);
canalTwitch.mostrarCanal();