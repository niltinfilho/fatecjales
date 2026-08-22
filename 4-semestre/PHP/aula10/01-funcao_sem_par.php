<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Função sem parâmetros</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <?php
  function bemVindo()
  {
    echo "<p style='text-align: center'>Olá, seja bem-vindo!</p>";
  }
  echo "<h1>Invocando a função bemVindo()</h1>";
  bemVindo();

  echo "<h1>Função bemVindo() dentro do laço For</h1>";
  for ($i = 1; $i <= 5; $i++) {
    bemVindo();
  }
  ?>
</body>

</html>
