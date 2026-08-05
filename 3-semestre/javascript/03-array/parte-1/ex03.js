const nomeProdutos = [
  "Monitor",
  "Teclado",
  "Mouse",
  "Headset",
  "Webcam",
  "Hub USB",
];
console.log(
  "Teclado está incluído na lista? ",
  nomeProdutos.includes("Teclado") ? "Sim" : "Não",
);
console.log("O mouse está na posição: ", nomeProdutos.indexOf("Mouse"));

const produtos = [
  { nome: "Monitor", preco: 850 },
  { nome: "Teclado", preco: 95 },
  { nome: "Mouse", preco: 120 },
  { nome: "Headset", preco: 75 },
  { nome: "Webcam", preco: 230 },
];

console.log(
  "Primeiro produto acima de R$100,00: ",
  produtos.find((produto) => produto.preco > 100),
);
console.log(
  "Índice do primeiro produto acima de R$100,00: ",
  produtos.findIndex((produto) => produto.preco > 100),
);

console.log(
  "Existe o produto Notebook? ",
  produtos.includes("Notebook") ? "Existe" : "Não existe",
);
