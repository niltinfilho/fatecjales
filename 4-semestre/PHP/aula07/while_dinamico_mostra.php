<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estrutura de repetição while</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <h1>Mostrando os valores</h1>
  <?php
  $i = 1;
  while ($i <= 5) {
    $valor = $_GET["v" . $i];
    if ($valor == NULL) {
      echo "<p>Faltou informar o $i ° valor</p>";
    } else {
      echo "<p>$i ° valor: $valor</p>";
    }
    $i++;
  }
  ?>
  <br>
  <a href="while_dinamico.php">Voltar para o formulário</a>
</body>

</html>
