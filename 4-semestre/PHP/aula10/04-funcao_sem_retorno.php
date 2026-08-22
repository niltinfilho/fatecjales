<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Função sem retorno</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <?php
  function soma($a, $b)
  {
    $soma = $a + $b;
    echo "<p>A soma entre $a e $b é igual a $soma</p>";
  }

  echo "<h1>Função sem retorno</h1>";
  $x = 9;
  $y = 15;
  soma($x, $y);
  ?>
</body>

</html>
