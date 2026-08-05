const smartWatch = {
    marca: "Xiomi",
    bateria: "470mAh",
    conectado: true
};

for (let chave in smartWatch) {
    console.log(`${chave}: ${smartWatch[chave]}`);
};