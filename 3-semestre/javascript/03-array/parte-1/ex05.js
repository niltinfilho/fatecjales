const notas = [7.5, 8.0, 5.5, 9.0, 6.0, 4.5, 7.0];

console.log(
  "Todos os alunos tiraram nota maior que 4? ",
  notas.every((nota) => nota > 4) ? "Sim" : "Não",
);

console.log(
  "\nAlgum aluno tirou nota 10? ",
  notas.some((nota) => nota >= 10) ? "Sim" : "Não",
);

console.log(
  "\nAlgum aluno foi reprovado (nota menor que 5)? ",
  notas.some((nota) => nota < 5) ? "Sim" : "Não",
);

console.log(
  "\nTodas as notas são do tipo number? ",
  notas.every((nota) => typeof nota == "number") ? "Sim" : "Não",
);
