<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulário de contador</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <h1>Formulário de contador</h1>

  <form method="get" action="contador_mostra.php">
    <label for="nInicial">Número inicial:</label>
    <input type="number" name="nInicial" id="nInicial">

    <label for="nFinal">Número final:</label>
    <input type="number" name="nFinal" id="nFinal">

    <label for="incDec">Incremento/Decremento</label>
    <select name="incDec" id="incDec">
      <option value="" selected disabled>Selecione uma opção</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>

    <input type="submit" value="Calcular">
  </form>

</body>

</html>
