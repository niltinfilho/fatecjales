<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resultado da ligação</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <!--
    Capítulo 13, Desafio 17 (p. 553): cobrança de ligação com desconto por horário.
    
    - 0h às 9h -> 50% de desconto
    - 9h às 18h -> 0% de desconto
    - 18h às 21h -> 30% de desconto
    - 21h às 24h -> 40% de desconto
  -->

  <main class="cartao">
    <h1>Resultado da ligação</h1>
    <div class="resultado">
      <?php
      $horaInicial = $_POST['horaInicial'] ?? 0;
      $minInicial = $_POST['minInicial'] ?? 0;
      $horaFinal = $_POST['horaFinal'] ?? 0;
      $minFinal = $_POST['minFinal'] ?? 0;
      $valorMinuto =  str_replace(',', '.', $_POST['valor'] ?? '0');

      $inicio = $horaInicial * 60 + $minInicial;
      $fim = $horaFinal * 60 + $minFinal;

      if ($fim < $inicio) {
        $fim = $fim + 1440;
      }

      $valorTotal = 0;
      $valorComDesconto = 0;

      for ($minuto = $inicio; $minuto < $fim; $minuto++) {
        $hora = floor(($minuto % 1440) / 60);

        if ($hora < 9) {
          $desconto = 50;
        } elseif ($hora < 18) {
          $desconto = 0;
        } elseif ($hora < 21) {
          $desconto = 30;
        } else {
          $desconto = 40;
        }

        $valorTotal += $valorMinuto;
        $valorComDesconto += $valorMinuto * (100 - $desconto) / 100;
      }

      $duracao = $fim - $inicio;
      $horas = intdiv($duracao, 60);
      $resto = $duracao % 60;
      ?>

      <p>
        Duração
        <strong>
          <?= $duracao . ' minutos (' . $horas . 'h ' . $resto . 'min)' ?>
        </strong>
      </p>

      <p>
        Valor total
        <strong>
          <?= 'R$' . number_format($valorTotal, 2, ',', '.') ?>
        </strong>
      </p>

      <p>
        Desconto concedido
        <strong>
          <?= 'R$' . number_format($valorTotal - $valorComDesconto, 2, ',', '.') ?>
        </strong>
      </p>

      <p class="destaque">
        Valor final
        <strong>
          <?= 'R$' . number_format($valorComDesconto, 2, ',', '.') ?>
        </strong>
      </p>
    </div>

    <a class="botao" href="index.html">Nova ligação</a>
  </main>
</body>

</html>