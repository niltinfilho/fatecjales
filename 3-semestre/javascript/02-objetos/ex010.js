class LampadaInteligente {
    constructor() {
        this.ligada = false;
    };

    ligar() {
        this.ligada = true;
    };

    desligar() {
        this.ligada = false;
    };
};

let lampada = new LampadaInteligente();
console.log(lampada);

lampada.ligar();
console.log(lampada);

lampada.desligar();
console.log(lampada);

lampada.ligar();
console.log(lampada);