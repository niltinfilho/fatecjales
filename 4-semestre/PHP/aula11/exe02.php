<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vetores e matriz</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <form action="exe02_mostra.php">
    <?php
    for ($i = 0; $i <= 1; $i++) {
      for ($c = 0; $c <= 3; $c++) {
        echo "<p style='color:#000'>Matriz [$i, $c]</p> <input type='text' name=m$i$c>";
      }
    }
    ?>
    <input type="submit" value="Enviar">
  </form>
</body>

</html>
