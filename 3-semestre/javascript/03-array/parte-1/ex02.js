const frase = "JavaScript é uma linguagem incrível";
const fraseDividida = frase.split(" ");
console.log("Frase dividida: ", fraseDividida);

const fraseUnida = fraseDividida.join(" - ");
console.log("Frase unida: ", fraseUnida);

const fraseInvertida = fraseDividida.reverse().join(" ");
console.log("Frase invertida: ", fraseInvertida);

const data = "25/04/2025";
const dataDividida = data.split("/");
const dia = dataDividida.at(0);
const mes = dataDividida.at(1);
const ano = dataDividida.at(2);
console.log("Dia: ", dia);
console.log("Mês: ", mes);
console.log("Ano: ", ano);
const dataInvertida = `${ano}/${mes}/${dia}`;
console.log("Data invertida: ", dataInvertida);


