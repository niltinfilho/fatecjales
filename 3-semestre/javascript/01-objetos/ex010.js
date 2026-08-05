const drone = {
    modelo: "DJI Mini",
    autonomia: 34,
    camera: "4K"
};

for (let [chave, valor] of Object.entries(drone)) {
    console.log(`${chave}: ${valor}`);
}