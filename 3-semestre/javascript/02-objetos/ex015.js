class BibliotecaJogos {
    constructor() {
        this.listaJogos = [];
    };

    adicionarJogo(jogo) {
        this.listaJogos.push(jogo);
    };

    listarJogos() {
        for (let jogo of this.listaJogos) {
            console.log(jogo);
        };
    };
};

let favoritos = new BibliotecaJogos();
favoritos.adicionarJogo("CS2");
favoritos.adicionarJogo("Valorant");
favoritos.adicionarJogo("Fortnite");
favoritos.adicionarJogo("Resident Evil");
favoritos.listarJogos();