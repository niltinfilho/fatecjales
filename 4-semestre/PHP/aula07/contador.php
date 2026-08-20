<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estrutura condicional switch</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <h1>Confirmação de pagamento</h1>

  <?php
  $valor = $_GET["valor"];
  $operacao = $_GET["operacao"];

  if ($valor == NULL || empty($operacao)) {
    echo "<p>O formulário está incompleto! Volte e preencha-o.</p>";
  } else {
    echo "<p>O valor da compra é <strong>R\$" . number_format($valor, 2, ",") . "</strong></p><br>";

    switch ($operacao) {
      case 1:
        $resultado = $valor - ($valor * 0.10);
        echo "<p>O valor total com pagamento à vista e desconto de 10% é <strong>R\$" . number_format($resultado, 2, ",") . "</strong></p>";
        break;
      case 2:
        $resultado = $valor + ($valor * 0.05);
        echo "<p>O valor total com pagamento em 30 dias e juros de 5% é <strong>R\$" . number_format($resultado, 2, ",") . "</strong></p>";
        break;
      case 3:
        $resultado = $valor + ($valor * 0.10);
        echo "<p>O valor total com pagamento em 60 dias e juros de 10% é <strong>R\$" . number_format($resultado, 2, ",") . "</strong></p>";
        break;
      default:
        echo "<p>Não foi selecionada uma forma de pagamento!</p>";
    }
  }
  ?>

  <a href="switch.html">Voltar para o formulário</a>
</body>

</html>
