const pontuacoes = {
    fase1: 8,
    fase2: 7,
    fase3: 5
};

let soma = 0;
for (let valor of Object.values(pontuacoes)) {
    soma += Number(valor);
}
console.log(soma);