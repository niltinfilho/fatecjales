<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vetores e matriz</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <?php
  $cliente['razaosocial'] = 'José da Silva - ME';
  $cliente['nomefantasia'] = 'JS Soluções e Sistemas';
  $cliente['cidade'] = 'Jales';

  echo "<h1>Mostrando com print_r</h1>";
  print_r($cliente);

  echo "<h1>Mostrando com var_dump</h1>";
  var_dump($cliente);

  echo "<h1>Percorrendo um array com foreach</h1>";
  foreach ($cliente as $valor) {
    echo "$valor <br>";
  }

  echo "<h1>Percorrendo um array com foreach mostrando suas chaves</h1>";
  foreach ($cliente as $chave => $valor) {
    echo "$chave: $valor <br>";
  }
  ?>
</body>

</html>
