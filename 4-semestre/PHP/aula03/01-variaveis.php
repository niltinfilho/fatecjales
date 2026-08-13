<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>01 - Variáveis</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <h1><?= "Variáveis" ?></h1>
  <?php
  $var1 = 40;
  echo "Var 1: ";
  echo $var1;
  echo "<br>";
  $var2 = 45;
  echo "Var 2: ";
  echo $var2;
  echo "<br>";
  $var3 = "Aprendendo PHP!";
  echo "Var 3: ";
  echo $var3;
  echo "<br>";
  $var2 = "Variáveis dinâmicas (sem tipagem)!";
  echo "Var 2: ";
  echo $var2;
  echo "<br>";
  ?>
</body>

</html>