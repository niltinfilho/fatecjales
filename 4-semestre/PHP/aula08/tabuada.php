<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulário de tabuada</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <h1>Selecione um número para fazer a tabuada</h1>
  <form method="get" action="tabuada_mostra.php">
    <label for="num">Número:</label>
    <select name="num" id="num">
      <option value="" selected disabled>Selecione uma opção</option>
      <?php
      $i = 1;
      do {
        echo "<option value='$i'>$i</option>";
        $i++;
      } while ($i <= 10);
      ?>
    </select>

    <input type="submit" value="Tabuada">
  </form>

</body>

</html>
