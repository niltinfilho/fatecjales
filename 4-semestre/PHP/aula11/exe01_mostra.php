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
  for ($i = 0; $i < 5; $i++) {
    $valores[] = $_GET["i$i"];
    echo $_GET["i$i"] . "<br>";
  }

  echo "<br><h2>Mostrando com foreach</h2>";
  foreach ($valores as $valor) {
    echo $valor . "<br>";
  }

  echo "<br><h2>Mostrando com print_r</h2>";
  print_r($valores);

  echo "<br><h2>Mostrando com var_dump</h2>";
  var_dump($valores);
  ?>
</body>

</html>
