<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estrutura de decisão if</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <h1>Relatório da média do aluno</h1>
  <br>

  <?php
  $nome = $_GET["nome"];
  $nota1 = $_GET["nota1"];
  $nota2 = $_GET["nota2"];
  $nota3 = $_GET["nota3"];
  $nota4 = $_GET["nota4"];

  $camposVazios = 0;

  if ($nota1 == NULL) {
    $camposVazios++;
  } elseif ($nota2 == NULL) {
    $camposVazios++;
  } elseif ($nota3 == NULL) {
    $camposVazios++;
  } elseif ($nota4 == NULL) {
    $camposVazios++;
  }

  if ($camposVazios > 0) {
    if ($camposVazios == 1) {
      echo "Existe um campo vazio! Volte e preencha-o.";
    } else {
      echo "Existem campos vazios! Volte e preencha-os.";
    }
  } else {
    $media = ($nota1 + $nota2 + $nota3 + $nota4) / 4;
    echo "<p>$nome obteve a média $media.</p>";
    echo "<p>O aluno(a) está " . ($media >= 6 ? "aprovado!</p>" : "reprovado!</p>");
  }
  ?>

  <a href="media.html">Voltar para o formulário</a>
</body>

</html>
