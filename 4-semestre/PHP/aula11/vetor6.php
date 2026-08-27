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
  $clientes[0]["nome"] = "José da Silva";
  $clientes[0]["sexo"] = "Masculino";
  $clientes[0]["cidade"] = "Jales/SP";

  $clientes[1]["nome"] = "Maria Souza";
  $clientes[1]["sexo"] = "Feminino";
  $clientes[1]["cidade"] = "Urânia/SP";

  echo "<h1>Mostrando com print_r</h1>";
  print_r($clientes);

  echo "<h1>Percorrendo um array com foreach mostrando suas chaves</h1>";
  foreach ($clientes as $chaveA => $linha) {
    echo "--> Cliente: $chaveA <br>";

    foreach ($linha as $chaveB => $coluna) {
      echo "$chaveB: $coluna | ";
    }

    echo "<br>";
  }
  ?>
</body>

</html>
