const assinatura = {
    cliente: "Niltin 1000°",
    valorMensal: 120,
    meses: 10,

    valorTotal: function() {
        return this.valorMensal * this.meses;
    }
};

console.log(assinatura.valorTotal());