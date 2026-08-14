<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>07 - Aritméticos</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <h1><?= "Aritméticos" ?></h1>
  <?php
  $n1 = 3;
  $n2 = 2;
  echo "<p>A soma de <strong>$n1 + $n2 = " . ($n1 + $n2) . "</strong><br></p>";
  echo "<p>A subtração de <strong>$n1 - $n2 = " . ($n1 - $n2) . "</strong><br></p>";
  echo "<p>A multiplicação de <strong>$n1 * $n2 = " . ($n1 * $n2) . "</strong><br></p>";
  echo "<p>A divisão de <strong>$n1 / $n2 = " . ($n1 / $n2) . "</strong><br></p>";
  echo "<p>A módulo de <strong>$n1 % $n2 = " . ($n1 % $n2) . "</strong><br></p>";
  $n3 = "10";
  echo "<p>A soma de <strong>$n1 + \"$n3\" = " . ($n1 + $n3) . "</strong></p>";
  ?>
</body>

</html>