<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estrutura condicional switch</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <h1>Resultado da contagem</h1>
  <?php
  $nInicial = $_GET["nInicial"];
  $nFinal = $_GET["nFinal"];
  $incDec = $_GET["incDec"];

  if ($nInicial == NULL || $nFinal == NULL || empty($incDec)) {
    echo "<p>Informações faltando! Volte e preencha o formulário corretamente.</p>";
  } else {
    if ($nInicial < $nFinal) {
      while ($nInicial <= $nFinal) {
        echo "<p>$nInicial</p>";
        $nInicial += $incDec;
      }
    } else {
      while ($nFinal <= $nInicial) {
        echo "<p>$nInicial</p>";
        $nInicial -= $incDec;
      }
    }
  }
  ?>
  <br>
  <a href="contador.php">Voltar para o formulário</a>
</body>

</html>
