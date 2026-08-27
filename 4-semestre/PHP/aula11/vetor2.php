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
  $bandas[] = 'Queen';
  $bandas[] = 'Scorpions';
  $bandas[] = 'Dire Straits';
  $bandas[] = 'U2';
  echo "<h1>Mostrando com print_r</h1>";
  print_r($bandas);

  echo "<h1>Mostrando com var_dump</h1>";
  var_dump($bandas);

  echo "<h1>Percorrendo um array com for</h1>";
  for ($i = 0; $i <= count($bandas) - 1; $i++) {
    echo $i + 1 . " - $bandas[$i]<br>";
  }

  echo "<h1>Percorrendo um array com foreach</h1>";
  foreach ($bandas as $valor) {
    echo "$valor<br>";
  }
  ?>
</body>

</html>
