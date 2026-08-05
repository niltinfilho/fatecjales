const playlist = {
    nome: "Melhores sertanejos 2012",
    quantidadeMusicas: 98,

    resumo: function() {
        console.log(`A playlist "${this.nome}" possui ${this.quantidadeMusicas} músicas`);
    }
};

playlist.resumo();