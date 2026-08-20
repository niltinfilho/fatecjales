<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estrutura de repetição do-while</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <h1>Contagem de 1 a 10</h1>
  <?php
  $i = 1;
  do {
    echo "<p>$i</p>";
    $i++;
  } while ($i <= 10);
  ?>
</body>

</html>
