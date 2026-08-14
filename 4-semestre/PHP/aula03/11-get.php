<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>11 - Get</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <h1><?= "Get" ?></h1>
  <?php
  $n1 = $_GET["a"];
  $n2 = $_GET["b"];
  ?>
  <p>
    Na URL digite: <br>
    <em>.../aula03/11-get.php?a=10&b=50</em> <br>
    para não aparecer o erro!
  </p>
  <p>A soma entre os valores digitados é igual a <strong><?= $n1 + $n2 ?></strong></p>
</body>

</html>