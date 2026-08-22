<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Função com multiplos parâmetros</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <h1>Função com multiplos parâmetros</h1>
  <?php
  function soma()
  {
    $v = func_get_args(); // pega todos os argumentos passados para a função
    $t = func_num_args(); //pega a quantidade de argumentos passados para a função
    $s = 0;
    for ($i = 0; $i < $t; $i++) {
      $s += $v[$i];
    }
    return $s;
  }

  echo "<h2>Invocando a função soma(3, 5, 2, 8, 9, 4)</h2>";
  $r = soma(3, 5, 2, 8, 9, 4);
  echo "<p>O resultado é $r</p>";
  ?>
</body>

</html>
