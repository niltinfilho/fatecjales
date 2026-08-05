const servidor = {
    nome: "Servidor Principal",
    ip: "192.168.0.10",

    mostrarIp: function() {
        console.log(this.ip);
    }
};

servidor.mostrarIp();