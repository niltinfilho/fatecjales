<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>11 - Get</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <h1><?= "Get" ?></h1>
  <form action="<?= $_SERVER["PHP_SELF"] ?>">
    <label for="num1">Número 1:</label>
    <input type="number" name="num1" id="num1" value="<?= $_GET["num1"] ?? 0 ?>">
    <label for="num1">Número 2:</label>
    <input type="number" name="num2" id="num2" value="<?= $_GET["num2"] ?? 0 ?>">
    <input type="submit" value="Calcular">
  </form>

  <?php
  $n1 = $_GET["num1"] ?? 0;
  $n2 = $_GET["num2"] ?? 0;
  if ($n1 + $n2 > 0) {
    echo "<br><br><p style=\"font-size: 1.5rem\">A soma entre os valores digitados é igual a <strong>" . $n1 + $n2 . "</strong></p>";
  }
  ?>

  <script>
    if (window.history.replaceState) {
      const urlLimpa = window.location.protocol + "//" + window.location.host + window.location.pathname;

      window.history.replaceState({
        path: urlLimpa
      }, '', urlLimpa);
    }

    let n1 = document.querySelector("#num1");
    let n2 = document.querySelector("#num2");

    n1.addEventListener("focus", () => {
      n1.value = "";
    });

    n1.addEventListener("focusout", () => {
      if (n1.value == "" || n1.value < 0) {
        n1.value = 0;
      }
    });

    n2.addEventListener("focus", () => {
      n2.value = "";
    });

    n2.addEventListener("focusout", () => {
      if (n2.value == "" || n2.value < 0) {
        n2.value = 0;
      }
    });
  </script>
</body>

</html>
