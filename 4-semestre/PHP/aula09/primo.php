<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resposta da tabuada</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <?php
  $num = $_GET["num"];
  $divisores = [];
  echo "<h1>Analisando o número $num:</h1><br>";
  for ($i = 1; $i <= $num; $i++) {
    if ($num % $i == 0) {
      $divisores[] = $i;
    }
  }
  $totalDivisores = count($divisores);
  ?>
  <p>Valores multiplos: <?= implode(' ', $divisores); ?></p>
  <p>Total de multiplos: <?= $totalDivisores; ?></p>
  <p>Resultado: <?= $num ?> <?= $totalDivisores == 2 ? "é PRIMO!" : "não é PRIMO!" ?></p>
  <a href="primo.html">Voltar para o formulário</a>
</body>

</html>
