<?php
class Veiculo
{
  public $nome;
  public $cor;
  public $ano;
  public $botao;

  public function acelerar()
  {
    if ($this->botao == true) {
      echo "<p>O carro está acelerando...</p>";
    } else {
      echo "<p>O carro está parado...</p>";
    }
  }

  public function ligar()
  {
    $this->botao = true;
  }

  public function desligar()
  {
    $this->botao = false;
  }
}
