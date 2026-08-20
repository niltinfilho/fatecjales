<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estrutura condicional switch</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <h1>Resultado da operação</h1>

  <?php
  $valor1 = $_GET["valor1"];
  $valor2 = $_GET["valor2"];
  $operacao = $_GET["operacao"];

  if ($valor1 == NULL || $valor2 == NULL || $operacao == NULL) {
    echo "<p>O formulário está incompleto! Volte e preencha-o.</p>";
  } else {
    echo "<p>Os valores digitados foram <strong>$valor1</strong> e <strong>$valor2</strong></p><br>";

    switch ($operacao) {
      case "adicao":
        $resultado = $valor1 + $valor2;
        echo "<p>O resultado da operação $valor1 + $valor2 é igual a <strong>$resultado</strong></p>";
        break;
      case "subtracao":
        $resultado = $valor1 - $valor2;
        echo "<p>O resultado da operação $valor1 - $valor2 é igual a <strong>$resultado</strong></p>";
        break;
      case "multiplicacao":
        $resultado = $valor1 * $valor2;
        echo "<p>O resultado da operação $valor1 * $valor2 é igual a <strong>$resultado</strong></p>";
        break;
      case "divisao":
        $resultado = $valor1 / $valor2;
        echo "<p>O resultado da operação $valor1 / $valor2 é igual a <strong>$resultado</strong></p>";
        break;
      default:
        echo "<p>Não foi selecionada uma operação!</p>";
    }
  }
  ?>

  <a href="calculadora.html">Voltar para o formulário</a>
</body>

</html>
