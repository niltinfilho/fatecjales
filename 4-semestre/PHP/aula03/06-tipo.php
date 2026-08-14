<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>06 - Tipo</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <h1><?= "Tipo" ?></h1>
  <?php
  $var1 = 10;
  $var2 = 35.86;
  $var3 = "PHP Hypertext Preprocessor";
  $var4 = false;
  $var5 = null;
  echo "<p><strong>$var1</strong> é do tipo <strong>" . gettype($var1) . "</strong></p>";
  echo "<p><strong>$var2</strong> é do tipo <strong>" . gettype($var2) . "</strong><br></p>";
  echo "<p><strong>$var3</strong> é do tipo <strong>" . gettype($var3) . "</strong><br></p>";
  echo "<p><strong>$var4</strong> é do tipo <strong>" . gettype($var4) . "</strong><br></p>";
  echo "<p><strong>$var5</strong> é do tipo <strong>" . gettype($var5) . "</strong><br></p>";
  ?>
</body>

</html>