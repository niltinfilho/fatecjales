<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vetores e matriz</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <pre>
    <?php
    require_once 'Veiculo.php';

    $carro = new Veiculo;
    $carro->nome = "Gol";
    $carro->cor = "Branco";
    $carro->ano = 2015;

    echo "<h2>Mostrando o objeto carro com var_dump</h2>";
    var_dump($carro);

    echo "<h2>Mostrando o objeto carro com print_r</h2>";
    print_r($carro);

    echo "<h2>Mostrando os métodos</h2>";
    echo "<p>Botão = true</p>";
    $carro->botao = true;
    $carro->acelerar();

    echo "<br>";

    echo "<p>Botão = false</p>";
    $carro->botao = false;
    $carro->acelerar();

    echo "<br>";

    echo "<p>Carro -> ligar()</p>";
    $carro->ligar();
    $carro->acelerar();

    echo "<br>";

    echo "<p>Carro -> desligar()</p>";
    $carro->desligar();
    $carro->acelerar();
    ?>
</pre>
</body>

</html>