<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>02 - Constantes</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <h1><?= "Constantes" ?></h1>
  <?php
  define("SALARIO", 954);
  echo "O salário mínimo é " . SALARIO;
  ?>
</body>

</html>