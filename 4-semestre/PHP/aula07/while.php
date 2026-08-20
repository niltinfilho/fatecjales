<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estrutura de repetição while</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <h1>Contagem de 1 a 10</h1>
  <?php
  $contador = 1;
  while ($contador <= 10) {
    echo $contador . "<br>";
    $contador++;
  }
  ?>
</body>

</html>
