<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Recebendo valor do HTML</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <?php
  $valor = $_GET["valor"];
  ?>
  <h1>Recebendo dados do Formulário 1</h1>
  <p>A parte inteira de <em><?= $valor ?></em> é <strong><?= intval($valor) ?></strong></p>
  <br>
  <a href="form1.html">Voltar para o formulário</a>
</body>

</html>
