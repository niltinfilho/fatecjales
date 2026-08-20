<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resposta da tabuada</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <?php
  $num = $_GET["num"];
  echo "<h1>Mostrando tabuada do número $num:</h1>";

  $i = 1;
  do {
    echo "<p>$num x $i = " . $num * $i . "<br></p>";
    $i++;
  } while ($i <= 10);
  ?>
  <br>
  <a href="tabuada.php">Voltar para o formulário</a>
</body>

</html>
