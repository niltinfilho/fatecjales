const streamer = {
    canal: "niltinf",
    plataforma: "twitch.tv",
    seguidores: 162,

    mostrarPerfil: function() {
        console.log(`Canal: ${this.canal} | Plataforma: ${this.plataforma} | Seguidores: ${this.seguidores}`);
    },

    mostrarUrlPerfil: function() {
        console.log(`https://${this.plataforma}/${this.canal}`);
    }
};

streamer.mostrarPerfil();
streamer.mostrarUrlPerfil();