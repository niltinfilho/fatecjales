const sensor = {
    tipo: "temperatura",
    valor: 28,
    unidade: "°C"
};

let msg = "";
let count = 0;
for (let [chave, valor] of Object.entries(sensor)) {
    msg += `${chave} = ${valor}`;
    count++;
    if (count < Object.keys(sensor).length) {
        msg += ", "
    }
};
console.log(msg)