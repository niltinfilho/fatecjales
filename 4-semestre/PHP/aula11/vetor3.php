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
  $mix[] = 'José';
  $mix[] = 7;
  $mix[] = 12.5;
  $mix[] = 'Maria';

  echo "<h1>Mostrando com print_r</h1>";
  print_r($mix);

  echo "<h1>Mostrando com var_dump</h1>";
  var_dump($mix);
  ?>
</body>

</html>
