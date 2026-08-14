<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>10 - Lógico</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <h1><?= "Lógico" ?></h1>
  <?php
  $ano = 2000;
  $idade = 2026 - $ano;

  $tipo = ($idade >= 18 && $idade < 65) ? "é obrigatório" : "não é obrigatório";
  ?>

  <p>
    Quem nasceu em <strong><?= $ano ?>
    </strong> tem a idade de <strong><?= $idade ?>
    </strong> anos
  </p>
  <p>Seu voto <strong><?= $tipo ?></strong>!</p>
</body>

</html>