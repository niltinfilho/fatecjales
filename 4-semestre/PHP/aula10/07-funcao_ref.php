<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Retorna parâmetro por referência</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <h1>Função que retorna parâmetro por referência</h1>
  <?php
  function referencia(&$x)
  {
    $x += 2;
    echo "<p>O valor de x é igual a $x</p>";
  }
  $a = 3;
  referencia($a);
  echo "<p>O valor de a é igual a $a</p>";
  ?>
</body>

</html>
