<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estrutura de repetição while</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <h1>While Dinâmico</h1>

  <form method="get" action="while_dinamico_mostra.php">
    <?php
    $contador = 1;
    while ($contador <= 5) {
      echo "<p>$contador ° valor: <input type='number' name='v$contador'/> </p>";
      $contador++;
    }
    ?>
    <input type="submit" value="Enviar">
  </form>
</body>

</html>
