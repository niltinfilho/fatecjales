class Midia {
    constructor(titulo) {
        this.titulo = titulo;
    };

    reproduzir() {
        console.log(`Reproduzindo "${this.titulo}"...`);
    };
};

class Musica extends Midia {
    pausar() {
        console.log("Música pausada.");
    };
};

let musicaLegal = new Musica("musica legal");
musicaLegal.reproduzir();
musicaLegal.pausar();