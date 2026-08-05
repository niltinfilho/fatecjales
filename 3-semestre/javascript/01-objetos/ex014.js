const metricasSite = {
    tempoCarregamento: 108,
    seo: 100,
    acessibilidade: 98
};

total = 0;
for (let valor of Object.values(metricasSite)) {
    total += valor;
};
console.log(total / Object.keys(metricasSite).length);