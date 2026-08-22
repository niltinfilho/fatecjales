<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Função com parâmetros</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <?php
  function soma($a, $b)
  {
    $soma = $a + $b;
    echo "<p>A soma entre $a e $b é igual a $soma</p>";
  }
  echo "<h1>Invocando a função soma(3, 4)</h1>";
  soma(3, 4);

  echo "<h1>Invocando a função soma(8, 2)</h1>";
  soma(8, 2);

  $x = 9;
  $y = 15;
  echo "<h1>Invocando a função com \$x valendo 9 e \$y valendo 15</h1>";
  soma($x, $y);
  ?>
</body>

</html>
