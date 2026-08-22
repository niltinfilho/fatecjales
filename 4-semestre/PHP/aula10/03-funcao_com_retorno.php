<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Função com retorno</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <?php
  function soma($a, $b)
  {
    return $a + $b;
  }
  echo "<h1>Função com retorno</h1>";
  $x = 20;
  $y = 30;
  echo "<p>A soma entre $x e $y é igual a " . soma($x, $y) . "</p>";
  ?>
</body>

</html>
