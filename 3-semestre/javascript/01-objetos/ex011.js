const configSistema = {
    tema: "",
    idioma: "PT-br",
    notificacoes: "desligadas"
};

for (let cfg of Object.values(configSistema)) {
    if (cfg == "" || cfg == null || cfg == undefined) {
        console.log("Configuração Inválida!");
        break;
    }
}

const configSistema2 = {
    tema: null,
    idioma: "PT-br",
    notificacoes: "desligadas"
};

for (let cfg of Object.values(configSistema2)) {
    if (cfg == "" || cfg == null || cfg == undefined) {
        console.log("Configuração Inválida!");
        break;
    }
}

const configSistema3 = {
    tema: undefined,
    idioma: "PT-br",
    notificacoes: "desligadas"
};

for (let cfg of Object.values(configSistema3)) {
    if (cfg == "" || cfg == null || cfg == undefined) {
        console.log("Configuração Inválida!");
        break;
    }
}