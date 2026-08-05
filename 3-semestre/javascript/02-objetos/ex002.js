function ContaStreaming(usuario, plano) {
    this.usuario = usuario;
    this.plano = plano;

    this.mostrarPlano = function() {
        console.log(`O usuário ${this.usuario} está no plano ${this.plano}`)
    };
};

let netflix = new ContaStreaming("niltinf", "pro");
let stremio = new ContaStreaming("niltinf", "crackeado");

netflix.mostrarPlano();
stremio.mostrarPlano();