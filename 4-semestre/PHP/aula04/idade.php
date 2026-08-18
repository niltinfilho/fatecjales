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
  $nome = $_GET["nome"];
  $nasc = $_GET["nasc"];
  $sexo = $_GET["sexo"];
  $idade = date("Y") - $nasc;
  ?>
  <h1>Recebendo dados do Formulário 2</h1>
  <p><?= $nome ?> é do sexo <em><?= $sexo ?></em> e tem <strong><?= $idade ?></strong> anos de idade</p>
  <br>
  <a href="form2.html">Voltar para o formulário</a>
</body>

</html>
