<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>09 - Relacionais</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <h1><?= "Relacionais" ?></h1>
  <?php
  $num1 = 5;
  $num2 = 3;
  $tipo = "s";
  $r = $tipo == "s" ? $num1 + $num2 : $num1 * $num2;
  ?>
  <p>O $tipo é: <strong><?= $tipo ?></strong></p>
  <p>Operação: $tipo == "s" ? $num1 + $num2 : $num1 * $num2</p>
  <p>O resultado é: <strong><?= $r ?></strong></p>
</body>

</html>