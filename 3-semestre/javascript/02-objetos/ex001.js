function ContaStreaming(usuario, plano) {
    this.usuario = usuario;
    this.plano = plano;
};

let netflix = new ContaStreaming("niltinf", "pro");
let stremio = new ContaStreaming("niltinf", "crackeado");

console.log(netflix);
console.log(stremio);