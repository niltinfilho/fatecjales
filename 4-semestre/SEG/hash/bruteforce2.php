<?php
$hashAlvo = "fffa7ef83d327ee4fa1102050695deb258a9d096";
$tentativas = 0;

for ($dia = 1; $dia <= 31; $dia++) {
  for ($mes = 1; $mes <= 12; $mes++) {
    for ($ano = 1900; $ano <= 2025; $ano++) {

      $tentativas++;

      $tentativa = sprintf(
        "%02d%02d%04d",
        $dia,
        $mes,
        $ano
      );

      $hash = sha1($tentativa);

      echo "Tentativa #$tentativas: $tentativa | SHA1: $hash </br>";

      if (hash_equals($hashAlvo, $hash)) {
        echo "\nSenha encontrada: $tentativa</br>";
        echo "Hash: $hash</br>";
        echo "Total de tentativas: $tentativas</br>";
        exit;
      }
    }
  }
}

echo "\nSenha não encontrada.\n";
echo "Total de tentativas: $tentativas\n";