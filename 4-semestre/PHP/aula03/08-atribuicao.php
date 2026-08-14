<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>08 - Atribuição</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <h1><?= "Atribuição" ?></h1>

  <?php
  $var1 = 2;
  ?>
  <p><strong><?= $var1 . " += 10 -> </strong>" . ($var1 += 10) . "<br>" ?></p>
  <p><strong><?= $var1 . " *= 10 -> </strong>" . ($var1 *= 10) . "<br>" ?></p>
  <p><strong><?= $var1 . " /= 10 -> </strong>" . ($var1 /= 10) . "<br>" ?></p>
  <p><strong><?= $var1 . " -= 10 -> </strong>" . ($var1 -= 10) . "<br>" ?></p>
</body>

</html>