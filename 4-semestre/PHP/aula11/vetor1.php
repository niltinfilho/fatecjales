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
  $numeros = array(12, 38, 55, 90, 110);
  echo "<h1>Mostrando com print_r</h1>";
  print_r($numeros);
  echo "<h1>Mostrando com var_dump</h1>";
  var_dump($numeros);
  ?>

  <pre>
      <?php
      $numeros = array(12, 38, 55, 90, 110);
      echo "<h1>Mostrando com print_r</h1>";
      print_r($numeros);
      echo "<h1>Mostrando com var_dump</h1>";
      var_dump($numeros);
      ?>
  </pre>
</body>

</html>
