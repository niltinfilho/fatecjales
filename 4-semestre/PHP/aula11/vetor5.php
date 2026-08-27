<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vetores e matriz</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <pre>
    <?php
    $numeros[0][0] = 5;
    $numeros[0][1] = 30;
    $numeros[0][2] = 45;
    $numeros[1][0] = 100;
    $numeros[1][1] = 200;
    $numeros[1][2] = 300;

    echo "<h1>Mostrando com print_r</h1>";
    print_r($numeros);

    echo "<h1>Percorrendo um array com foreach mostrando suas chaves</h1>";
    foreach ($numeros as $chaveA => $linha) {
      echo "--> Linha: $chaveA<br>";

      foreach ($linha as $chaveB => $coluna) {
        echo "Coluna $chaveB: $coluna | ";
      }

      echo "<br>";
    }
    ?>
</pre>
</body>

</html>
