<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vetores e matriz</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <?php
  echo "<h2>Recebendo os dados e mostrando com echo</h2>";
  for ($i = 0; $i <= 1; $i++) {
    for ($c = 0; $c <= 3; $c++) {
      $valores[$i][$c] = $_GET["m$i$c"];
      echo "Matriz [$i] [$c] = " . $_GET["m$i$c"] . "<br><br>";
    }
  }

  echo "<h2>Mostrando com foreach</h2>";
  foreach ($valores as $chaveA => $linha) {
    echo "--> Linha: $chaveA" . "<br>";
    foreach ($linha as $chaveB => $coluna) {
      echo "Coluna $chaveB: $coluna" . "<br>";
    }
  }

  echo "<h2>Mostrando com print_r</h2>";
  echo "<pre>";
  print_r($valores);
  echo "</pre>";

  echo "<h2>Mostrando com var_dump</h2>";
  echo "<pre>";
  var_dump($valores);
  echo "</pre>";
  ?>
</body>

</html>