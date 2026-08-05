class CarteiraDigital {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    };

    depositar(valor) {
        this.saldo += valor;
    };

    pagar(valor) {
        if (valor > this.saldo) {
            console.log("Operação inválida. Saldo insuficiente!")
        } else {
            this.saldo -= valor;
        }
    };
};

let nubank = new CarteiraDigital("Nilton", 10);
nubank.depositar(5);
console.log(nubank.saldo);

nubank.pagar(10);
console.log(nubank.saldo);

nubank.pagar(10)
console.log(nubank.saldo);