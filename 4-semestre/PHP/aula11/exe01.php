<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vetores e matriz</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <form action="exe01_mostra.php">
    <?php
    for ($i = 0; $i < 5; $i++) {
      echo "<p style='color: #000'>Vetor [$i]: <input type='text' name='i$i'></p>";
    }
    ?>
    <input type="submit">
  </form>
</body>

</html>
