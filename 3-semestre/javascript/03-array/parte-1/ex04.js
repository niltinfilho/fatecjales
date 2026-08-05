let alunos = [
  "Ana",
  "Bruno",
  "Carla",
  "Diego",
  "Elisa",
  "Felipe",
  "Gabi",
  "Hugo",
  "Ísis",
  "João",
];

console.log("3 primeiros alunos: ", alunos.slice(0, 3));
console.log("Lista completa: ", alunos);

console.log("\n2 últimos alunos: ", alunos.slice(-2));
console.log("Lista completa: ", alunos);

console.log("\n5° aluno: ", alunos.at(4));
alunos.splice(4, 1);
console.log("Lista completa: ", alunos);

console.log("\nNovo aluno na 3ª posição: Kamila");
alunos.splice(2, 0, "Kamila");
console.log("Lista completa: ", alunos);

let grupoB = ["Lucas", "Mariana", "Nicolas"];
console.log("\nGrupo B: ", grupoB);
console.log("Grupos combinados: ", alunos.concat(grupoB));

