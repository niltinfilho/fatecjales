<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estrutura de decisão if</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <h1>Recebendo dados do formulário</h1>
  <br>

  <?php
  $idade = $_GET["idade"];

  if ($idade == NULL) {
    echo "<p>Volte e digite sua idade!</p>";
  } elseif ($idade >= 18) {
    echo "<p>Você tem $idade anos!<br>Com essa idade você já pode tirar habilitação.</p>";
  } else {
    echo "<p>Você tem $idade anos!<br>Com essa idade você ainda não pode tirar habilitação.</p>";
  }
  ?>

  <a href="if_else.html">Voltar para o formulário</a>
</body>

</html>
