class IngressoEvento {
    constructor(evento, preco) {
        this.evento = evento;
        this.preco = preco;
    };

    aplicarDesconto(percentual) {
        return this.preco * (1 - (percentual / 100));
    };
};

let evento = new IngressoEvento("Balada Show", 150);
console.log(evento.aplicarDesconto(20));