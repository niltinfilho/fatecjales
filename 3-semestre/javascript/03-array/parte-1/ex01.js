let contatos = [];
contatos.push("Nilton");
contatos.push("Roberto");
contatos.push("Assunção");
contatos.push("Filho");
contatos.push("OMaisLindo");

let removido = contatos.at(-1);
contatos.pop();
console.log(contatos);
console.log("Nome removido: " + removido);

contatos.unshift("Outro nome bem legal");
console.log(contatos);

removido = contatos.at(0);
contatos.shift();
console.log(contatos);
console.log("Nome removido: " + removido);

console.log("Contatos restantes: " + contatos.length);
console.log("Lista final: " + contatos);

